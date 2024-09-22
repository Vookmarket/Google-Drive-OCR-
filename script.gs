function ocrImagesInFolder(folderId, targetFormats, outputSpreadsheetId, processedFolderId) {
  // 指定されたフォルダを取得
  var folder = DriveApp.getFolderById(folderId);

  // 出力先のスプレッドシートを取得
  var spreadsheet = SpreadsheetApp.openById(outputSpreadsheetId);
  var sheet = spreadsheet.getSheets()[0];

  // OCR結果を格納するリスト
  var textList = [];

  // フォルダ内のファイルを処理 (サブフォルダは処理しない)
  var files = folder.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    var mimeType = file.getMimeType();

    // 指定された画像形式のみ処理
    if (targetFormats.includes(mimeType)) {
      // OCR処理を実行 (Googleドキュメントに変換)
      var newFile = Drive.Files.copy({ 
        title: file.getName(),
        mimeType: 'application/vnd.google-apps.document',
        parents: [{ id: folder.getId() }]
      }, file.getId(), { convert: true });

      // 生成されたドキュメントを開き、テキストを取得
      var doc = DocumentApp.openById(newFile.getId());
      var text = doc.getBody().getText();
      textList.push(text);

      // 生成されたドキュメントを削除
      Drive.Files.remove(newFile.getId());

      // 処理状況をログに出力
      Logger.log('OCR completed for: ' + file.getName());

      // 処理済みファイルを移動 (オプション)
      if (processedFolderId) {
        var processedFolder = DriveApp.getFolderById(processedFolderId);
        file.moveTo(processedFolder);
      }
    }
  }

  // OCR結果をスプレッドシートに出力
  if (textList.length > 0) {
    sheet.getRange(sheet.getLastRow() + 1, 1, textList.length, 1).setValues(textList.map(text => [text]));
  }

  return textList;
}
