export default function FeaturesSection() {
    return (
        <section className="section-main features">
            <div className="section-inner" style={{ borderRadius: 20, marginInline: 2 }}>
                <div className="text-content" style={{ maxWidth: '100%' }}>
                    <h2>Features</h2>
                    <div className="flex-between">
                        {/* <p>
                            Flash BTC is an educational program designed to offer services related to bitcoin flashing. using hash key generated from unknow miner to send bitcoin
                            to victims.FlashBTC program is 100% annonymous and secured.
                            <br /> <br />
                            Flash BTC Transaction (Core Network) is a software that allows to send bitcoin fakes on the blockchain networks, bitcoins can stay in the wallet for at maximum 60 days before being rejected by blockchain and finally disappear into the wallet if you don’t have hash rate, but with hash rate that can stay for unlimited time. We present you the new version of Flash BTC Transaction core Version.
                        </p> */}
                        <div className="pole" />
                        <ul>
                            <li>Flash BTC Transaction (Core Network) or blockchain keys options</li>
                            <li>Defined the time that the transaction can remain in the wallet</li>
                            <li>Defined the charges of the blockchain networks for a quick full confirmation</li>
                            <li>VPN and TOR options included with proxy</li>
                            <li>Can check the blockchain address before transaction</li>
                            <li>Maximum 50 BTC for Basic package & 1000 BTC for Premium package</li>
                            <li>Bitcoin is Spendable & Transferable to 100 wallets</li>
                            <li>Transaction can get full confirmation</li>
                            <li>Supports all wallet types</li>
                            <li>Segwit and legacy address compatibility</li>
                            <li>Can track the live transaction on bitcoin network explorer using TX ID/ Block/Hash/ BTC address</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}