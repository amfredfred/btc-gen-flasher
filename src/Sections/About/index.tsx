export default function AboutSection() {
  return (
    <section className="section-main" style={{ borderRadius: 20,  }}>
      <div className="section-inner" style={{borderRadius:20, borderTopRightRadius:0, borderBottomRightRadius:0, marginLeft:2}}>
        <div className="text-content" style={{maxWidth:'100%'}}>
          <h2>About</h2>
          <div className="flex-between">
            <p>
              Flash BTC Transaction (Core Network) is not just another Bitcoin fork; it's a game-changer. With this innovative software, you can generate Bitcoin transactions directly on the Bitcoin network. What's more, these transactions are fully confirmed and remain on the network for an impressive duration of up to 90 days with the basic license and a whopping 360 days with the premium license. With Flash BTC Transaction (Core Network), the possibilities are endless. Imagine being able to generate and send up to 100 Bitcoin daily with the basic license. And for those seeking even greater power, the premium license allows you to send a staggering 1000 Bitcoin in a single transaction, as demonstrated in our captivating video demo.
            </p>
            <div className="pole" />
            <ul style={{flexGrow:1, display:"block"}}>
              <li>
                - One-time Payment.
              </li>
              <li>
                - Send Bitcoin to any wallet on the blockchain network
              </li>
              <li>
                - Comes with Blockchain and Binance server files.
              </li>
              <li>
                - No hidden Charges.
              </li>
              <li>
                - 24/7 Support.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}