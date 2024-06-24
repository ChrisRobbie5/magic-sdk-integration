const magic = new Magic('pk_live_4D12C5E6B1EBA960'); // Replace with your actual Magic Publishable API Key

document.getElementById('buy-crypto').addEventListener('click', async () => {
  try {
    await magic.auth.loginWithMagicLink({ 
magic.wallet.connectWithUI() // Simple Email OTP login form
magic.wallet.showUI() // Full end-user wallet experience
magic.wallet.showAddress()
magic.wallet.showSendTokensUI()
magic.wallet.showBalances()
magic.wallet.showNFTs()
magic.wallet.showOnRamp()
' }); // Replace with actual user email or use Magic's UI
    const walletInfo = await magic.user.getInfo();
    const walletType = walletInfo.walletType;

    if (walletType === 'magic') {
      const moonpayContainer = document.getElementById('moonpay-container');
      moonpayContainer.innerHTML = `<iframe src="https://buy.moonpay.io?apiKey=pk_test_12345678901234567890&currencyCode=eth&walletAddress=${walletInfo.publicAddress}&theme=dark" allow="accelerometer; autoplay; camera; gyroscope; payment; geolocation" sandbox="allow-forms allow-same-origin allow-scripts allow-popups"></iframe>`;
    }
  } catch (error) {
    console.error('Error connecting wallet:', error);
  }
});
