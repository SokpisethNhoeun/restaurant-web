// ProductGallery.jsx
import React, { useState, useEffect } from "react";
import "./ProductGallery.css";

const IMAGES = [
  "https://dlcdnwebimgs.asus.com/gain/251BB9FE-CD1A-4F9F-AA69-F0516CAF410A/w750/h470/fwebp",
  "https://dlcdnwebimgs.asus.com/gain/0075CD12-E145-49F5-916C-EF86E8691207/w750/h470/fwebp",
  "https://dlcdnwebimgs.asus.com/gain/857C54EA-07BC-4540-A8C3-1445272CA92C/w717/h525/fwebp/w273",
  "https://dlcdnwebimgs.asus.com/gain/B61EA2FB-08C0-4B20-A851-FB0672A981B5/w717/h525/fwebp/w273"
];

export default function ProductGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  const openModal = (start = 0) => {
    setIndex(start);
    setOpen(true);
  };
  const closeModal = () => setOpen(false);

  const prev = () => setIndex(i => (i - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setIndex(i => (i + 1) % IMAGES.length);

  // Reset loaded flag when image index changes (for fade effect)
  useEffect(() => {
    setImgLoaded(false);
  }, [index]);

  // keyboard support: Esc to close, arrows to navigate
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="pg-root">
      {/* example item card */}
      <div className="item-card" onClick={() => openModal(0)}>
        <img src={IMAGES[0]} alt="product-thumb" />
        <h3>Product Title</h3>
        <p className="price">$1699</p>
      </div>

      {/* modal */}
      {open && (
        <div className="pg-modal" role="dialog" aria-modal="true">
          <div className="pg-modal-inner">
            <button className="pg-close" onClick={closeModal} aria-label="Close">×</button>

            <div className="pg-gallery">
              <button className="pg-nav pg-left" onClick={prev} aria-label="Previous">‹</button>

              <div className="pg-main-wrap">
                {/* clicking main image steps to the next image */}
                <img
                  key={IMAGES[index]}
                  src={IMAGES[index]}
                  alt={`Slide ${index + 1}`}
                  onLoad={() => setImgLoaded(true)}
                  onClick={next}
                  className={`pg-main ${imgLoaded ? "loaded" : ""}`}
                />
                <div className="pg-step">{index + 1} / {IMAGES.length}</div>
              </div>

              <button className="pg-nav pg-right" onClick={next} aria-label="Next">›</button>
            </div>

            <div className="pg-thumbs" aria-hidden="false">
              {IMAGES.map((src, i) => (
                <button
                  key={i}
                  className={`pg-thumb ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-pressed={i === index}
                >
                  <img src={src} alt={`thumbnail ${i + 1}`} />
                </button>
              ))}
            </div>

            <div className="pg-actions">
              <button className="btn">Add to Cart</button>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}