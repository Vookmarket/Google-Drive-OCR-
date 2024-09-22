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
