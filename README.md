## Google Drive 画像 OCR & ファイル処理スクリプト

このGoogle Apps Scriptは、Google Drive内の指定フォルダにある画像ファイルを一括でOCR処理し、抽出したテキストをスプレッドシートに出力、さらに処理済みファイルを指定のフォルダに移動する機能を提供します。**サブフォルダ内のファイルは処理しません**。

### 機能

* **特定の画像形式のOCR処理:** PNG、JPEGなど、指定した画像形式のファイルのみをOCR処理します。
* **OCR処理結果のスプレッドシート出力:** 抽出したテキストを指定したスプレッドシートに出力します。
* **処理済みファイルの移動:** OCR処理が完了したファイルを指定したフォルダに移動します。

### 使い方

1. **スクリプトをコピー:** このスクリプトの内容をGoogle Apps Scriptエディタにコピーします。

2. **必要なIDを取得:**
   * 処理対象のフォルダのID
   * OCR結果を出力するスプレッドシートのID
   * 処理済みファイルを移動するフォルダのID (オプション)

3. **スクリプトを実行:**
   * `ocrImagesInFolder` 関数を呼び出します。
   * 引数として、取得したIDとOCR処理対象の画像形式を指定します。

```javascript
var folderId = 'your_folder_id'; 
var targetFormats = ['image/png', 'image/jpeg']; 
var outputSpreadsheetId = 'your_spreadsheet_id';
var processedFolderId = 'your_processed_folder_id'; // オプション

var textList = ocrImagesInFolder(folderId, targetFormats, outputSpreadsheetId, processedFolderId);
```
### 注意点

* スクリプトを実行する前に、Google Drive APIとGoogle Sheets APIを有効にする必要があります。
* スプレッドシートとフォルダのIDは、それぞれのファイル/フォルダのURLから確認できます。
* 大量の画像ファイルを処理する場合は、Google Apps Scriptの実行時間制限に注意してください。
* OCRの精度は画像の品質や内容に依存します。完璧なテキスト抽出は保証されません。
* **このスクリプトは、指定したフォルダ内のファイルのみを処理し、サブフォルダ内のファイルは処理しません。**

### ライセンス

このスクリプトはMITライセンスのもとで公開されています。自由に改変・再配布できますが、著作権表示とライセンス表示を残してください。

### 免責事項

このスクリプトの使用によって生じた損害について、作者は一切の責任を負いません。自己責任でご利用ください。
