const magic = new Magic('pk_live_4D12C5E6B1EBA960'); // Replace with your actual Magic Publishable API Key

document.getElementById('buy-crypto').addEventListener('click', async () => {
  try {
    await magic.auth.loginWithMagicLink({ showUI: true });
    const walletInfo = await magic.user.getInfo();
    const walletType = walletInfo.walletType;

    if (walletType === 'magic') {
      const moonpayContainer = document.getElementById('moonpay-container');
      moonpayContainer.innerHTML = `<iframe src="https://buy.moonpay.io?apiKey=YOUR_MOONPAY_API_KEY&currencyCode=eth&walletAddress=${walletInfo.publicAddress}&theme=dark" allow="accelerometer; autoplay; camera; gyroscope; payment; geolocation" sandbox="allow-forms allow-same-origin allow-scripts allow-popups"></iframe>`;
    }
  } catch (error) {
    console.error('Error connecting wallet:', error);
  }
});
