"use client";
import { Html5Qrcode } from "html5-qrcode";
import React, { useCallback, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

function Html5scanner({ setResultScan, setModalScan }) {
  const [cameraId, setCameraId] = useState(null);
  const [message, setMessage] = useState(null);
  const [html5QrCode, setHtml5QrCode] = useState("");

  const startScan = async () => {
    const config = {
      fps: 5,
      qrbox: { width: 250, height: 250 },
      rememberLastUsedCamera: true,
      facingMode: { exact: "environment" },
      focusMode: "continuous",
      aspectRatio: 1,
      showTorchButtonIfSupported: true,
      useBarCodeDetectorIfSupported: true,
      showZoomSliderIfSupported: true,
      defaultZoomValueIfSupported: 2,
    };
    await html5QrCode.start({ facingMode: "environment" }, config, onSuccess);
  };
  function getCameraId() {
    Html5Qrcode.getCameras()
      .then(async (device) => {
        if (device) {
          await startScan();
        }
      })
      .catch(() => {
        return false;
      });
  }

  const openCamera = useCallback(async () => {
    if (Html5Qrcode) {
      if (html5QrCode.isScanning) {
        html5QrCode.stop();
        setHtml5QrCode([]);
      } else {
        setHtml5QrCode(new Html5Qrcode("reader"));
        getCameraId();
      }
    }
  }, [html5QrCode]);

  const onSuccess = (decodedText, decodedResult) => {
    html5QrCode.stop();
    setModalScan(false);
    setResultScan(decodedText);
  };

  const handleCloseScan = () => {
    setModalScan(false);
  };

  useEffect(() => {
    openCamera();
  }, [html5QrCode.renderedCamera]);

  return (
    <div className="fixed w-full bg-black/50 h-screen z-50">
      <div className="w-full max-w-[33.75rem] h-full mx-auto flex items-center justify-center">
        <div className="w-full  rounded-[10px] p-4">
          <div id="reader" className="block w-full"></div>
        </div>
        <div className="absolute w-full flex items-center justify-center z-50 bottom-0">
          <button
            onClick={handleCloseScan}
            className="bg-primary px-2 py-1 rounded-[0.25rem] mb-10 inline-flex items-center font-bold"
          >
            <span>
              <IoClose />
            </span>
            <span>CLOSE</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Html5scanner;
