const magic = new Magic('pk_live_4D12C5E6B1EBA960'); // Replace with your Magic Publishable API Key

document.querySelector('.connect-wallet').addEventListener('click', async () => {
  try {
    await magic.auth.loginWithMagicLink({ email: 'user@example.com' }); // Replace with user email or other login methods
    const walletInfo = await magic.user.getInfo();
    const walletType = walletInfo.walletType;

    if (walletType === 'magic') {
      await magic.wallet.showUI();
    }
  } catch (error) {
    console.error('Error connecting wallet:', error);
  }
});
