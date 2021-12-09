import { Frame } from 'react-native-vision-camera';
import { Barcode, BarcodeFormat } from '.';
export declare function useScanBarcodes(types: BarcodeFormat[]): [(frame: Frame) => void, Barcode[]];
