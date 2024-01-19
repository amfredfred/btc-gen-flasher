import VideoDemp from '../../assets/Videos/how-the-flasher-works.mp4'

export default function DemoSection() {
    return (
        <section className="section-main" style={{ padding: 0}}>
            <div className="section-inner" style={{ padding: 0, borderRadius: 10, boxShadow: 'none', background: 'transparent', backdropFilter: 'none'  }}>
                <div className="text-content" style={{ maxWidth: '100%', padding: 0 }}>
                    <h2 style={{ paddingInline: 10 }}>Demo</h2>
                    <div className="demo-video-container">
                        <button className="request-button">
                            Contact us
                        </button>
                        <video muted autoPlay contextMenu="" className="demo-video" onContextMenu={() => false}>
                            <source src={VideoDemp} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}