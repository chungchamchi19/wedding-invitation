const ControlButtons = () => {
  return (
    <div className="d-flex position-fixed flex-column" style={{ bottom: "10vh", right: "2vh", zIndex: 1030 }}>
      {/* Theme Button */}
      <button
        type="button"
        id="button-theme"
        className="btn bg-light-dark border btn-sm rounded-circle d-none btn-transparent shadow-sm mt-3"
        aria-label="Change theme"
        onClick={() => window.undangan.theme.change()}
      >
        <i className="fa-solid fa-circle-half-stroke" />
      </button>
      {/* Audio Button */}
      <button
        type="button"
        id="button-music"
        className="btn bg-light-dark border btn-sm rounded-circle d-none btn-transparent shadow-sm mt-3"
        aria-label="Change audio"
        data-offline-disabled="false"
      >
        <i className="fa-solid fa-circle-pause spin-button" />
      </button>
    </div>
  );
};

export default ControlButtons;
