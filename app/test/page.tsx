export default function Page() {
    return (
        <div style={{ background: "black", height: "100vh" }}>
            <video src="/1st.mp4" autoPlay loop muted playsInline style={{ width: "100%", height: "90vh", objectFit: "contain" }}></video>
        </div>
    )
}
