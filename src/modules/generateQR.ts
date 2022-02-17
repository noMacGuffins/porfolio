import QRCode from 'qrcode'

// With async/await
export const generateQR = async text => {
  try {
    return await QRCode.toDataURL(text)
  } catch (err) {
    return await null;
  }
}