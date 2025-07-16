<template>
  <v-row justify="center" align="center">
    <v-col cols="15" sm="8" md="5">
      <v-card>
        <v-card-title class="headline">
          QR Code Scanner
        </v-card-title>
        <v-card-text>
          <div id="reader" style="width: 685px;"></div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { Html5QrcodeScanner } from "html5-qrcode";

export default {
  name: 'QRScannerPage',
  mounted() {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );

    scanner.render(
      (decodedText, decodedResult) => {

      },
      error => {

      }
    );
  }
}
</script>
