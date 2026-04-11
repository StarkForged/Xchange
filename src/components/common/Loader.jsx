import { COLORS } from "../../constants/colors";

// Loader renders an animated spinner. Use fullPage to center it in the viewport.
export function Loader({ size = 40, fullPage = false }) {
  const spinner = (
    <>
      <style>{`@keyframes xchange-spin { to { transform: rotate(360deg); } }`}</style>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          border: `3px solid ${COLORS.surfaceContainer}`,
          borderTopColor: COLORS.primary,
          animation: "xchange-spin 0.7s linear infinite",
        }}
      />
    </>
  );

  if (fullPage) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: COLORS.surface,
        }}
      >
        {spinner}
      </div>
    );
  }

  return spinner;
}
