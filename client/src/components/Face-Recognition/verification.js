
import React, { useState, useEffect, useRef } from 'react'
import * as faceapi from 'face-api.js'
import './Verification.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Verification = () => {
  const videoHeight = 480
  const videoWidth = 640
  const [initializing, setInitializing] = useState(false)
  const videoRef = useRef()
  const canvasRef = useRef()
  let navigate = useNavigate()
  let result = []


  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "./models";
      setInitializing(true);
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
      ]).then(startVideo);
    };
    loadModels();
  }, []);

  const startVideo = () => {
    navigator.getUserMedia(
      {
        video: {},
      },
      (stream) => (videoRef.current.srcObject = stream),
      (err) => console.log(err)
    );
  };

  const handleVideoOnPlay = async () => {
    const regInterval = setInterval(async () => {
      if (initializing) {
        setInitializing(false);
      }
      canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
        videoRef.current
      );

      const displaySize = {
        width: videoWidth,
        height: videoHeight,
      };

      faceapi.matchDimensions(canvasRef.current, displaySize);

      let labeledFaceDescriptors;
      (async () => {
        labeledFaceDescriptors = await loadLabeledImages();
      })();
      const detection = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptors()
        .withFaceExpressions();
      const resizedDetections = faceapi.resizeResults(detection, displaySize);
      canvasRef.current
        .getContext("2d")
        .clearRect(0, 0, videoWidth, videoHeight);
      faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);

      if (labeledFaceDescriptors) {
        const faceMatcher = new faceapi.FaceMatcher(
          labeledFaceDescriptors,
          0.6
        );

        const results = resizedDetections.map((d) =>
          faceMatcher.findBestMatch(d.descriptor)
        )
        console.log(results)
        result = results
        results.forEach((result, i) => {
          const box = resizedDetections[i].detection.box;
          const drawBox = new faceapi.draw.DrawBox(box, {
            label: result.toString(),
          })
          drawBox.draw(canvasRef.current, resizedDetections)
        })
        if (results[0]._label === 'Kushal') {
          navigate('/voter/dashboard')
          window.location.reload()
        }
      }
    }, 1000)
  }

  function loadLabeledImages() {
    const label = sessionStorage.getItem("name");
    let labels = ["Kushal"];
    return Promise.all(
      labels.map(async (label) => {
        const descriptions = [];

        const img = await faceapi.fetchImage(
          `http://localhost:3000/img/Nirajan/1.jpg`
        );
        const detections = await faceapi
          .detectSingleFace(img)
          .withFaceLandmarks()
          .withFaceDescriptor();
        descriptions.push(detections.descriptor);

        return new faceapi.LabeledFaceDescriptors(label, descriptions);
      })
    );
  }
  return (
    <div className="detection">
      <span>{initializing ? `initializing` : `Ready`}</span>
      <div className="display-flex justify-content-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          height={videoHeight}
          width={videoWidth}
          onPlay={handleVideoOnPlay}
        ></video>
        <canvas ref={canvasRef} className="position-absolute"></canvas>
      </div>
    </div>
  );
};

export default Verification;
