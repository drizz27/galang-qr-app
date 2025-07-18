<template>
  <v-row justify="center" align="center">
    <v-col cols="15" sm="8" md="5">
      <v-card>
        <v-card-title class="headline">
          QR Code Scanner
        </v-card-title>
        <v-card-text>
          <div id="reader" style="width: 685px;"></div>
          <div v-if="qrResult" class="mt-4"> 
            <v-alert type="success" dense>
              <h3>QR Result:</h3> {{ qrResult }}
            </v-alert>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { Html5QrcodeScanner } from "html5-qrcode";
export default {
  name: 'QRScannerPage',
  data() {
    return {
      qrResult: ''
    }
  },
  mounted() {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );
    scanner.render(
      (decodedText, decodedResult) => {
        this.qrResult = decodedText; // ito ang nagpapakita sa result ng qr code
      },
      error => {
        // dito papakita kung ano ang gusto kong lumitaw kapag nag error
      }
    );
  }
}
</script>