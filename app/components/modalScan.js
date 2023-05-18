"use client";
import { Modal } from "react-bootstrap";
import Image from "next/image";
import { Html5Qrcode } from "html5-qrcode";
import useEffectAsync from "@/utils/useEffectAsync";
import { useCallback, useEffect, useState } from "react";
import { sleep } from "@/utils/anterra";
import { useGlobalContext } from "@/contex";

export function ModalScanRedeem({ show, close, code }) {
  // const [html5QrCode, setHtml5QrCode] = useState('')
  const { html5QrCode, setHtml5QrCode } = useGlobalContext();
  const [cameraId, setCameraId] = useState(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [notip, setNotip] = useState([]);

  function onSuccess(decodedText, decodedResult) {
    html5QrCode.stop();

    code(decodedText);
    setCameraOpen(false);
    close(false);
  }

  async function startScan() {
    const config = {
      fps: 1,
      qrbox: { width: 200, height: 200 },
      rememberLastUsedCamera: true,
      aspectRatio: 0.8,
      facingMode: { exact: "environment" },
      focusMode: "continuous",
      showTorchButtonIfSupported: true,
      useBarCodeDetectorIfSupported: true,
      showZoomSliderIfSupported: true,
      defaultZoomValueIfSupported: 2,
    };

    await html5QrCode.start({ facingMode: "environment" }, config, onSuccess);
    setCameraOpen(true);
  }

  function getCameraId() {
    Html5Qrcode.getCameras()
      .then(async (devices) => {
        if (devices && devices.length) {
          setCameraId(devices[0].id);
          await startScan();
          var res = {
            success: true,
            message: "",
          };
          setNotip(res);
        }
      })
      .catch((err) => {
        var res = {
          success: false,
          message:
            "Your device not have camera / permission blocked for access camera",
        };
        setNotip(res);
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

  useEffect(() => {
    openCamera();
  }, [html5QrCode.renderedCamera]);

  return (
    <>
      <Modal
        show={show}
        centered
        onHide={() => close(false)}
        backdrop="static"
        // fullscreen={'sm-down'}
      >
        <Modal.Body className="wrp">
          <div className="row">
            <div className="col-12 text-center mb-3 position-relative">
              <h6 className="m-0">Scan Code</h6>
            </div>
            <div className="col-12">
              {notip ? null : <span>{notip.message}</span>}
            </div>
            <div className="col-12 wrapper">
              <div
                id="reader"
                className="mb-3 qr-camera "
                style={{ display: "block" }}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
