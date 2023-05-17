"use client";
import { Html5Qrcode } from "html5-qrcode";
import React, { useCallback, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

function Html5scanner({ setResultScan, setModalScan }) {
  const [cameraId, setCameraId] = useState(null);
  const [message, setMessage] = useState(null);
  const [html5QrCode, setHtml5QrCode] = useState({
    element: null,
    canvasElement: null,
    scannerPausedUiElement: null,
    hasBorderShaders: null,
    borderShaders: null,
    qrMatch: null,
    renderedCamera: null,
    qrRegion: null,
    context: null,
    lastScanImageFile: null,
    isScanning: false,
    elementId: "reader",
    verbose: false,
    logger: { verbose: false },
    qrcode: {
      EXECUTIONS_TO_REPORT_PERFORMANCE: 100,
      executions: 0,
      executionResults: [],
      wasPrimaryDecoderUsedInLastDecode: false,
      verbose: false,
      primaryDecoder: {
        formatMap: {},
        reverseFormatMap: {},
        verbose: false,
        logger: { verbose: false },
        hints: {},
      },
    },
    shouldScan: true,
    stateManagerProxy: {
      stateManager: { state: 1, onGoingTransactionNewState: 0 },
    },
  });

  const onSuccess = (decodedText, decodedResult) => {
    html5QrCode.stop();
    setResultScan(decodedText);
  };
  async function startScan() {
    const config = {
      fps: 1,
      qrbox: { width: 250, height: 250 },
      rememberLastUsedCamera: true,
      facingMode: { exact: "environment" },
      focusMode: "continuous",
      aspectRatio: 0.8,
      showTorchButtonIfSupported: true,
      useBarCodeDetectorIfSupported: true,
      showZoomSliderIfSupported: true,
      defaultZoomValueIfSupported: 2,
    };

    await html5QrCode.start({ facingMode: "environment" }, config, onSuccess);
  }

  // let qrboxFunction = function (viewfinderWidth, viewfinderHeight) {
  //   let minEdgePercentage = 0.7; // 70%
  //   let minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
  //   let qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
  //   return {
  //     width: qrboxSize,
  //     height: qrboxSize,
  //   };
  // };

  function getCameraId() {
    Html5Qrcode.getCameras().then(async (devices) => {
      if (devices && devices.length) {
        setCameraId(devices[0].id);
        await startScan();
      }
    });
  }

  const openCamera = useCallback(async () => {
    if (html5QrCode) {
      if (html5QrCode.isScanning) {
        html5QrCode.stop();
        setHtml5QrCode([]);
      } else {
        setHtml5QrCode(new Html5Qrcode("reader"));
        getCameraId();
      }
    } else {
      setHtml5QrCode(new Html5Qrcode("reader"));
    }
  }, [html5QrCode]);

  useEffect(() => {
    const config = {
      fps: 1,
      qrbox: { width: 250, height: 250 },
      rememberLastUsedCamera: true,
      facingMode: { exact: "environment" },
      focusMode: "continuous",
      aspectRatio: 1,
      showTorchButtonIfSupported: true,
      useBarCodeDetectorIfSupported: true,
      showZoomSliderIfSupported: true,
      defaultZoomValueIfSupported: 2,
      disableFlip: false,
    };
    const scanner = new Html5Qrcode("reader");
    if (scanner) {
      if (scanner.isScanning) {
        scanner.stop();
        setHtml5QrCode([]);
      } else {
        scanner.start({ facingMode: "environment" }, config, onSuccess);
      }
    }
  }, []);

  // console.log(JSON.stringify(html5QrCode));

  const handleCloseScan = () => {
    setModalScan(false);
  };
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
