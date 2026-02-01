/**
 * Japanese translations for config schema UI hints.
 * These override server-provided hints with Japanese labels and help text.
 */

import type { ConfigUiHints } from "../types";

export const CONFIG_HINTS_JA: ConfigUiHints = {
  // ========================================
  // Meta section
  // ========================================
  "meta.lastTouchedVersion": {
    label: "設定最終更新バージョン",
    help: "OpenClawが設定を書き込んだ際に自動設定",
  },
  "meta.lastTouchedAt": {
    label: "設定最終更新日時",
    help: "最終設定書き込みのISOタイムスタンプ（自動設定）",
  },

  // ========================================
  // Env section
  // ========================================
  env: {
    label: "環境変数",
  },
  "env.shellEnv": {
    label: "シェル環境",
    help: "シェル環境変数の設定",
  },
  "env.shellEnv.enabled": {
    label: "シェル環境有効",
    help: "シェル環境変数の取得を有効にする",
  },
  "env.shellEnv.timeoutMs": {
    label: "タイムアウト（ミリ秒）",
    help: "シェル環境変数取得のタイムアウト時間（ミリ秒）",
  },
  "env.vars": {
    label: "環境変数",
    help: "追加の環境変数（キー:値のマップ）",
  },

  // ========================================
  // Update section
  // ========================================
  "update.channel": {
    label: "更新チャンネル",
    help: "git + npmインストール用の更新チャンネル（\"stable\"、\"beta\"、または\"dev\"）",
  },
  "update.checkOnStart": {
    label: "起動時に更新確認",
    help: "ゲートウェイ起動時にnpm更新を確認する（デフォルト: true）",
  },

  // ========================================
  // Browser section
  // ========================================
  browser: {
    label: "ブラウザ",
  },
  "browser.enabled": {
    label: "ブラウザ有効",
    help: "ブラウザ機能を有効にする",
  },
  "browser.evaluateEnabled": {
    label: "evaluate有効",
    help: "ブラウザのevaluate機能を有効にする",
  },
  "browser.cdpUrl": {
    label: "CDP URL",
    help: "Chrome DevTools Protocol接続先URL",
  },
  "browser.remoteCdpTimeoutMs": {
    label: "リモートCDPタイムアウト（ミリ秒）",
    help: "リモートCDP接続のタイムアウト時間（ミリ秒）",
  },
  "browser.remoteCdpHandshakeTimeoutMs": {
    label: "リモートCDPハンドシェイクタイムアウト（ミリ秒）",
    help: "リモートCDPハンドシェイクのタイムアウト時間（ミリ秒）",
  },
  "browser.color": {
    label: "カラー",
    help: "ブラウザUI識別用のカラーコード",
  },
  "browser.executablePath": {
    label: "実行ファイルパス",
    help: "ブラウザ実行ファイルのパス",
  },
  "browser.headless": {
    label: "ヘッドレス",
    help: "ヘッドレスモードで実行する",
  },
  "browser.noSandbox": {
    label: "サンドボックス無効",
    help: "サンドボックスを無効にする（セキュリティリスクあり）",
  },
  "browser.attachOnly": {
    label: "アタッチのみ",
    help: "既存のブラウザセッションにアタッチするのみ（新規起動しない）",
  },
  "browser.defaultProfile": {
    label: "デフォルトプロファイル",
    help: "デフォルトで使用するブラウザプロファイル名",
  },
  "browser.snapshotDefaults": {
    label: "スナップショットデフォルト",
    help: "ブラウザスナップショットのデフォルト設定",
  },
  "browser.profiles": {
    label: "プロファイル",
    help: "ブラウザプロファイル設定（名前→設定のマップ）",
  },
  "browser.profiles.cdpPort": {
    label: "CDPポート",
    help: "Chrome DevTools Protocolのポート番号",
  },
  "browser.profiles.cdpUrl": {
    label: "CDP URL",
    help: "Chrome DevTools Protocol接続先URL",
  },
  "browser.profiles.driver": {
    label: "ドライバー",
    help: "ブラウザドライバー（openclaw/extension）",
  },
  "browser.profiles.color": {
    label: "カラー",
    help: "プロファイル識別用のカラーコード（16進数）",
  },

  // ========================================
  // Diagnostics section
  // ========================================
  "diagnostics": {
    label: "診断",
  },
  "diagnostics.enabled": {
    label: "診断有効",
    help: "診断機能を有効にする",
  },
  "diagnostics.flags": {
    label: "診断フラグ",
    help: "フラグ別の診断ログを有効化（例: [\"telegram.http\"]）。\"telegram.*\"や\"*\"のようなワイルドカードをサポート",
  },
  "diagnostics.otel": {
    label: "オープンテレメトリ",
    help: "オープンテレメトリ（OpenTelemetry）トレース設定",
  },
  "diagnostics.otel.enabled": {
    label: "オープンテレメトリ有効",
    help: "オープンテレメトリを有効にする",
  },
  "diagnostics.otel.endpoint": {
    label: "エンドポイント",
    help: "オープンテレメトリエンドポイントURL",
  },
  "diagnostics.otel.protocol": {
    label: "プロトコル",
    help: "オープンテレメトリプロトコル",
  },
  "diagnostics.otel.headers": {
    label: "ヘッダー",
    help: "オープンテレメトリ用追加ヘッダー",
  },
  "diagnostics.otel.serviceName": {
    label: "サービス名",
    help: "オープンテレメトリサービス名",
  },
  "diagnostics.otel.traces": {
    label: "トレース有効",
    help: "オープンテレメトリトレースを有効にする",
  },
  "diagnostics.otel.metrics": {
    label: "メトリクス有効",
    help: "オープンテレメトリメトリクスを有効にする",
  },
  "diagnostics.otel.logs": {
    label: "ログ有効",
    help: "オープンテレメトリログを有効にする",
  },
  "diagnostics.otel.sampleRate": {
    label: "トレースサンプルレート",
    help: "オープンテレメトリトレースのサンプリングレート",
  },
  "diagnostics.otel.flushIntervalMs": {
    label: "フラッシュ間隔（ミリ秒）",
    help: "オープンテレメトリフラッシュ間隔（ミリ秒）",
  },
  "diagnostics.cacheTrace": {
    label: "キャッシュトレース",
  },
  "diagnostics.cacheTrace.enabled": {
    label: "キャッシュトレース有効",
    help: "埋め込みエージェント実行のキャッシュトレーススナップショットを記録する（デフォルト: false）",
  },
  "diagnostics.cacheTrace.filePath": {
    label: "ファイルパス",
    help: "キャッシュトレースログのJSONL出力パス",
  },
  "diagnostics.cacheTrace.includeMessages": {
    label: "メッセージを含める",
    help: "トレース出力に完全なメッセージペイロードを含める（デフォルト: true）",
  },
  "diagnostics.cacheTrace.includePrompt": {
    label: "プロンプトを含める",
    help: "トレース出力にプロンプトテキストを含める（デフォルト: true）",
  },
  "diagnostics.cacheTrace.includeSystem": {
    label: "システムプロンプトを含める",
    help: "トレース出力にシステムプロンプトを含める（デフォルト: true）",
  },
  // Legacy flat keys
  "diagnostics.cacheTraceEnabled": {
    label: "キャッシュトレース有効",
    help: "埋め込みエージェント実行のキャッシュトレーススナップショットを記録する（デフォルト: false）",
  },
  "diagnostics.cacheTraceFilePath": {
    label: "キャッシュトレースファイルパス",
    help: "キャッシュトレースログのJSONL出力パス（デフォルト: $CLAWBOT_STATE_DIR/logs/cache-trace.jsonl）",
  },
  "diagnostics.cacheTraceIncludeMessages": {
    label: "メッセージを含める",
    help: "トレース出力に完全なメッセージペイロードを含める（デフォルト: true）",
  },
  "diagnostics.cacheTraceIncludePrompt": {
    label: "プロンプトを含める",
    help: "トレース出力にプロンプトテキストを含める（デフォルト: true）",
  },

  // ========================================
  // Logging section
  // ========================================
  "logging": {
    label: "ログ設定",
  },
  "logging.level": {
    label: "ログレベル",
    help: "ログ出力のレベル（debug, info, warn, error）",
  },
  "logging.file": {
    label: "ログファイル",
    help: "ログファイルのパス",
  },
  "logging.console": {
    label: "コンソール出力",
    help: "コンソールへのログ出力を有効にする",
  },
  "logging.consoleLevel": {
    label: "コンソールログレベル",
    help: "コンソール出力のログレベル（silent/fatal/error/warn/info/debug/trace）",
  },
  "logging.consoleStyle": {
    label: "コンソールスタイル",
    help: "コンソール出力のスタイル（pretty/compact/json）",
  },
  "logging.redactSensitive": {
    label: "機密情報秘匿",
    help: "機密情報の秘匿モード（off/tools）",
  },
  "logging.redactPatterns": {
    label: "秘匿パターン",
    help: "秘匿対象の正規表現パターン（配列）",
  },

  // ========================================
  // Gateway section
  // ========================================
  "gateway": {
    label: "ゲートウェイ",
  },
  "gateway.port": {
    label: "ポート",
    help: "ゲートウェイが待ち受けるポート番号",
  },
  "gateway.host": {
    label: "ホスト",
    help: "ゲートウェイがバインドするホストアドレス",
  },
  "gateway.bind": {
    label: "バインド",
    help: "ゲートウェイのバインドモード",
  },
  "gateway.mode": {
    label: "モード",
    help: "ゲートウェイの動作モード（local/remote）",
  },
  "gateway.auth": {
    label: "認証",
  },
  "gateway.auth.enabled": {
    label: "認証有効",
    help: "ゲートウェイ認証を有効にする",
  },
  "gateway.auth.token": {
    label: "ゲートウェイトークン",
    help: "ゲートウェイアクセス用のトークン（Tailscale Serveアイデンティティを使用しない場合はデフォルトで必須）",
  },
  "gateway.auth.password": {
    label: "ゲートウェイパスワード",
    help: "Tailscale funnel用に必須",
  },
  "gateway.remote": {
    label: "リモートゲートウェイ",
  },
  "gateway.remote.url": {
    label: "リモートゲートウェイURL",
    help: "リモートゲートウェイのWebSocket URL（ws://またはwss://）",
  },
  "gateway.remote.sshTarget": {
    label: "リモートゲートウェイSSHターゲット",
    help: "SSH経由のリモートゲートウェイ（ゲートウェイポートをlocalhostにトンネル）。形式: user@hostまたはuser@host:port",
  },
  "gateway.remote.sshIdentity": {
    label: "リモートゲートウェイSSH鍵",
    help: "オプションのSSH鍵ファイルパス（ssh -iに渡される）",
  },
  "gateway.remote.token": {
    label: "リモートゲートウェイトークン",
    help: "リモートゲートウェイ認証トークン",
  },
  "gateway.remote.password": {
    label: "リモートゲートウェイパスワード",
    help: "リモートゲートウェイ認証パスワード",
  },
  "gateway.remote.tlsFingerprint": {
    label: "リモートゲートウェイTLSフィンガープリント",
    help: "リモートゲートウェイのsha256 TLSフィンガープリント（MITM回避のためピン留め）",
  },
  "gateway.remote.transport": {
    label: "トランスポート",
    help: "リモート接続のトランスポート方式（ssh/direct）",
  },
  "gateway.trustedProxies": {
    label: "信頼済みプロキシ",
    help: "信頼するプロキシのIPアドレス/CIDR（配列）",
  },
  "gateway.controlUi": {
    label: "コントロールUI",
  },
  "gateway.controlUi.enabled": {
    label: "コントロールUI有効",
    help: "コントロールUIを有効にする",
  },
  "gateway.controlUi.basePath": {
    label: "コントロールUIベースパス",
    help: "コントロールUIを提供するオプションURLプレフィックス（例: /openclaw）",
  },
  "gateway.controlUi.allowInsecureAuth": {
    label: "安全でないコントロールUI認証を許可",
    help: "安全でないHTTP経由のコントロールUI認証を許可（トークンのみ、非推奨）",
  },
  "gateway.controlUi.dangerouslyDisableDeviceAuth": {
    label: "デバイス認証を危険に無効化",
    help: "危険: コントロールUIデバイスアイデンティティチェックを無効にする（トークン/パスワードのみ）",
  },
  "gateway.http": {
    label: "HTTPエンドポイント",
  },
  "gateway.http.endpoints": {
    label: "エンドポイント",
  },
  "gateway.http.endpoints.chatCompletions": {
    label: "チャット補完",
  },
  "gateway.http.endpoints.chatCompletions.enabled": {
    label: "チャット補完エンドポイント",
    help: "OpenAI互換の `POST /v1/chat/completions` エンドポイントを有効にする（デフォルト: false）",
  },
  "gateway.http.endpoints.responses": {
    label: "レスポンスエンドポイント",
    help: "レスポンスAPIエンドポイント設定",
  },
  "gateway.http.endpoints.responses.enabled": {
    label: "有効",
    help: "レスポンスエンドポイントを有効にする",
  },
  "gateway.http.endpoints.responses.maxBodyBytes": {
    label: "最大ボディサイズ",
    help: "リクエストボディの最大バイト数",
  },
  "gateway.http.endpoints.responses.files": {
    label: "ファイル設定",
    help: "ファイルアップロード設定",
  },
  "gateway.http.endpoints.responses.files.allowUrl": {
    label: "URL許可",
    help: "URLからのファイル取得を許可",
  },
  "gateway.http.endpoints.responses.files.allowedMimes": {
    label: "許可MIMEタイプ",
    help: "許可するMIMEタイプのリスト",
  },
  "gateway.http.endpoints.responses.files.maxBytes": {
    label: "最大バイト数",
    help: "ファイルの最大バイト数",
  },
  "gateway.http.endpoints.responses.files.maxChars": {
    label: "最大文字数",
    help: "ファイルの最大文字数",
  },
  "gateway.http.endpoints.responses.files.maxRedirects": {
    label: "最大リダイレクト数",
    help: "URLフェッチ時の最大リダイレクト数",
  },
  "gateway.http.endpoints.responses.files.timeoutMs": {
    label: "タイムアウト（ミリ秒）",
    help: "ファイル取得のタイムアウト時間",
  },
  "gateway.http.endpoints.responses.files.pdf": {
    label: "PDF設定",
    help: "PDFファイル処理設定",
  },
  "gateway.http.endpoints.responses.files.pdf.maxPages": {
    label: "最大ページ数",
    help: "処理するPDFの最大ページ数",
  },
  "gateway.http.endpoints.responses.files.pdf.maxPixels": {
    label: "最大ピクセル数",
    help: "PDF画像の最大ピクセル数",
  },
  "gateway.http.endpoints.responses.files.pdf.minTextChars": {
    label: "最小テキスト文字数",
    help: "テキスト抽出の最小文字数",
  },
  "gateway.http.endpoints.responses.images": {
    label: "画像設定",
    help: "画像アップロード設定",
  },
  "gateway.http.endpoints.responses.images.allowUrl": {
    label: "URL許可",
    help: "URLからの画像取得を許可",
  },
  "gateway.http.endpoints.responses.images.allowedMimes": {
    label: "許可MIMEタイプ",
    help: "許可するMIMEタイプのリスト",
  },
  "gateway.http.endpoints.responses.images.maxBytes": {
    label: "最大バイト数",
    help: "画像の最大バイト数",
  },
  "gateway.http.endpoints.responses.images.maxRedirects": {
    label: "最大リダイレクト数",
    help: "URLフェッチ時の最大リダイレクト数",
  },
  "gateway.http.endpoints.responses.images.timeoutMs": {
    label: "タイムアウト（ミリ秒）",
    help: "画像取得のタイムアウト時間",
  },
  "gateway.reload": {
    label: "設定リロード",
  },
  "gateway.reload.mode": {
    label: "設定リロードモード",
    help: "設定変更時のホットリロード戦略（\"hybrid\"推奨）",
  },
  "gateway.reload.debounceMs": {
    label: "設定リロードデバウンス（ミリ秒）",
    help: "設定変更を適用する前のデバウンスウィンドウ（ミリ秒）",
  },
  "gateway.nodes": {
    label: "ノード",
  },
  "gateway.nodes.browser": {
    label: "ブラウザノード",
  },
  "gateway.nodes.browser.mode": {
    label: "ゲートウェイノードブラウザモード",
    help: "ノードブラウザルーティング（\"auto\"=接続中のブラウザノードを選択、\"manual\"=nodeパラメータ必須、\"off\"=無効）",
  },
  "gateway.nodes.browser.node": {
    label: "ゲートウェイノードブラウザピン",
    help: "ブラウザルーティングを特定のノードIDまたは名前にピン留め（オプション）",
  },
  "gateway.nodes.allowCommands": {
    label: "ゲートウェイノード許可コマンド（追加）",
    help: "ゲートウェイデフォルト以外に許可する追加のnode.invokeコマンド（コマンド文字列の配列）",
  },
  "gateway.nodes.denyCommands": {
    label: "ゲートウェイノード拒否コマンド",
    help: "ノードクレームまたはデフォルト許可リストに存在していてもブロックするコマンド",
  },
  "gateway.auth.allowTailscale": {
    label: "Tailscale許可",
    help: "Tailscale認証を許可する",
  },
  "gateway.auth.mode": {
    label: "認証モード",
    help: "認証モード（\"token\"または\"password\"）",
  },

  // ========================================
  // Gateway Tailscale section
  // ========================================
  "gateway.tailscale": {
    label: "Tailscale",
    help: "Tailscale統合設定",
  },
  "gateway.tailscale.mode": {
    label: "Tailscaleモード",
    help: "Tailscaleモード（\"off\"、\"serve\"、または\"funnel\"）",
  },
  "gateway.tailscale.resetOnExit": {
    label: "終了時にリセット",
    help: "終了時にTailscale Serve/Funnel設定をリセットする",
  },

  // ========================================
  // Gateway TLS section
  // ========================================
  "gateway.tls": {
    label: "TLS",
    help: "TLS/SSL設定",
  },
  "gateway.tls.enabled": {
    label: "TLS有効",
    help: "TLSを有効にする",
  },
  "gateway.tls.autoGenerate": {
    label: "自動生成",
    help: "TLS証明書を自動生成する",
  },
  "gateway.tls.caPath": {
    label: "CA証明書パス",
    help: "CA証明書ファイルのパス",
  },
  "gateway.tls.certPath": {
    label: "証明書パス",
    help: "サーバー証明書ファイルのパス",
  },
  "gateway.tls.keyPath": {
    label: "秘密鍵パス",
    help: "サーバー秘密鍵ファイルのパス",
  },

  // ========================================
  // Gateway HTTP Endpoints detailed section
  // ========================================
  "gateway.http.endpoints.chatCompletions.responses": {
    label: "レスポンス",
  },
  "gateway.http.endpoints.chatCompletions.responses.enabled": {
    label: "レスポンス有効",
    help: "レスポンス機能を有効にする",
  },
  "gateway.http.endpoints.chatCompletions.files": {
    label: "ファイル",
  },
  "gateway.http.endpoints.chatCompletions.files.allowedMimes": {
    label: "許可MIMEタイプ",
    help: "許可するMIMEタイプのリスト",
  },
  "gateway.http.endpoints.chatCompletions.files.allowUrl": {
    label: "URL許可",
    help: "URLからのファイル取得を許可する",
  },
  "gateway.http.endpoints.chatCompletions.files.maxBytes": {
    label: "最大バイト数",
    help: "ファイルの最大バイト数",
  },
  "gateway.http.endpoints.chatCompletions.files.maxChars": {
    label: "最大文字数",
    help: "ファイルの最大文字数",
  },
  "gateway.http.endpoints.chatCompletions.files.maxRedirects": {
    label: "最大リダイレクト数",
    help: "許可する最大リダイレクト数",
  },
  "gateway.http.endpoints.chatCompletions.files.pdf": {
    label: "PDF設定",
  },
  "gateway.http.endpoints.chatCompletions.files.pdf.maxPages": {
    label: "最大ページ数",
    help: "PDFの最大ページ数",
  },
  "gateway.http.endpoints.chatCompletions.files.pdf.maxPixels": {
    label: "最大ピクセル数",
    help: "PDFの最大ピクセル数",
  },
  "gateway.http.endpoints.chatCompletions.files.pdf.minTextChars": {
    label: "最小テキスト文字数",
    help: "PDFの最小テキスト文字数",
  },
  "gateway.http.endpoints.chatCompletions.files.pdf.timeoutMs": {
    label: "タイムアウト（ミリ秒）",
    help: "PDF処理のタイムアウト（ミリ秒）",
  },
  "gateway.http.endpoints.chatCompletions.images": {
    label: "画像設定",
  },
  "gateway.http.endpoints.chatCompletions.images.allowedMimes": {
    label: "許可MIMEタイプ",
    help: "許可する画像MIMEタイプのリスト",
  },
  "gateway.http.endpoints.chatCompletions.images.allowUrl": {
    label: "URL許可",
    help: "URLからの画像取得を許可する",
  },
  "gateway.http.endpoints.chatCompletions.images.maxBytes": {
    label: "最大バイト数",
    help: "画像の最大バイト数",
  },
  "gateway.http.endpoints.chatCompletions.images.maxRedirects": {
    label: "最大リダイレクト数",
    help: "許可する最大リダイレクト数",
  },
  "gateway.http.endpoints.chatCompletions.images.timeoutMs": {
    label: "タイムアウト（ミリ秒）",
    help: "画像取得のタイムアウト（ミリ秒）",
  },
  "gateway.http.endpoints.chatCompletions.maxBodyBytes": {
    label: "最大ボディバイト数",
    help: "リクエストボディの最大バイト数",
  },

  // ========================================
  // Agents section
  // ========================================
  "agents.list": {
    label: "エージェント一覧",
  },
  "agents.list.*.id": {
    label: "エージェントID",
  },
  "agents.list.*.name": {
    label: "エージェント名",
  },
  "agents.list.*.default": {
    label: "デフォルト",
    help: "このエージェントをデフォルトとして使用する",
  },
  "agents.list.*.model": {
    label: "モデル",
    help: "使用するAIモデル",
  },
  "agents.list.*.identity.avatar": {
    label: "エージェントアバター",
    help: "アバター画像パス（エージェントワークスペース相対のみ）またはリモートURL/データURL",
  },
  "agents.list[].identity.avatar": {
    label: "エージェントアバター",
    help: "アバター画像パス（エージェントワークスペース相対のみ）またはリモートURL/データURL",
  },
  "agents.list[].tools.profile": {
    label: "エージェントツールプロファイル",
    help: "エージェント固有のツールプロファイル",
  },
  "agents.list[].tools.alsoAllow": {
    label: "エージェントツール許可リスト追加",
    help: "エージェント固有の追加許可ツール",
  },
  "agents.list[].tools.byProvider": {
    label: "エージェントプロバイダー別ツールポリシー",
    help: "エージェント固有のプロバイダー別ツールポリシー",
  },
  "agents.defaults": {
    label: "エージェントデフォルト",
  },
  "agents.defaults.workspace": {
    label: "ワークスペース",
    help: "デフォルトのワークスペースディレクトリ",
  },
  "agents.defaults.repoRoot": {
    label: "リポジトリルート",
    help: "システムプロンプトのランタイム行に表示されるオプションのリポジトリルート（自動検出を上書き）",
  },
  "agents.defaults.bootstrapMaxChars": {
    label: "ブートストラップ最大文字数",
    help: "システムプロンプトに注入される各ワークスペースブートストラップファイルの切り詰め前最大文字数（デフォルト: 20000）",
  },
  "agents.defaults.envelopeTimezone": {
    label: "エンベロープタイムゾーン",
    help: "メッセージエンベロープのタイムゾーン（\"utc\"、\"local\"、\"user\"、またはIANAタイムゾーン文字列）",
  },
  "agents.defaults.envelopeTimestamp": {
    label: "エンベロープタイムスタンプ",
    help: "メッセージエンベロープに絶対タイムスタンプを含める（\"on\"または\"off\"）",
  },
  "agents.defaults.envelopeElapsed": {
    label: "エンベロープ経過時間",
    help: "メッセージエンベロープに経過時間を含める（\"on\"または\"off\"）",
  },
  "agents.defaults.models": {
    label: "モデル",
    help: "設定済みモデルカタログ（キーは完全なプロバイダー/モデルID）",
  },
  "agents.defaults.model": {
    label: "モデル設定",
  },
  "agents.defaults.model.primary": {
    label: "プライマリモデル",
    help: "プライマリモデル（プロバイダー/モデル）",
  },
  "agents.defaults.model.fallbacks": {
    label: "モデルフォールバック",
    help: "順序付きフォールバックモデル（プロバイダー/モデル）。プライマリモデル失敗時に使用",
  },
  "agents.defaults.imageModel": {
    label: "画像モデル設定",
  },
  "agents.defaults.imageModel.primary": {
    label: "画像モデル",
    help: "プライマリモデルに画像入力がない場合に使用するオプションの画像モデル（プロバイダー/モデル）",
  },
  "agents.defaults.imageModel.fallbacks": {
    label: "画像モデルフォールバック",
    help: "順序付きフォールバック画像モデル（プロバイダー/モデル）",
  },
  "agents.defaults.humanDelay": {
    label: "人間遅延",
  },
  "agents.defaults.humanDelay.mode": {
    label: "人間遅延モード",
    help: "ブロック返信の遅延スタイル（\"off\"、\"natural\"、\"custom\"）",
  },
  "agents.defaults.humanDelay.minMs": {
    label: "人間遅延最小（ミリ秒）",
    help: "カスタム人間遅延の最小遅延（ミリ秒）（デフォルト: 800）",
  },
  "agents.defaults.humanDelay.maxMs": {
    label: "人間遅延最大（ミリ秒）",
    help: "カスタム人間遅延の最大遅延（ミリ秒）（デフォルト: 2500）",
  },
  "agents.defaults.cliBackends": {
    label: "CLIバックエンド",
    help: "テキスト専用フォールバック用のオプションCLIバックエンド（claude-cli等）",
  },
  "agents.defaults.memorySearch": {
    label: "メモリ検索",
    help: "MEMORY.mdとmemory/*.mdに対するベクトル検索（エージェント別オーバーライド可）",
  },
  "agents.defaults.memorySearch.enabled": {
    label: "メモリ検索有効",
    help: "メモリ検索を有効にする",
  },
  "agents.defaults.memorySearch.sources": {
    label: "メモリ検索ソース",
    help: "メモリ検索でインデックスするソース（デフォルト: [\"memory\"]、セッショントランスクリプトを含めるには\"sessions\"を追加）",
  },
  "agents.defaults.memorySearch.extraPaths": {
    label: "追加メモリパス",
    help: "メモリ検索に含める追加パス（ディレクトリまたは.mdファイル、相対パスはワークスペースから解決）",
  },
  "agents.defaults.memorySearch.experimental.sessionMemory": {
    label: "メモリ検索セッションインデックス（実験的）",
    help: "メモリ検索の実験的セッショントランスクリプトインデックスを有効にする（デフォルト: false）",
  },
  "agents.defaults.memorySearch.provider": {
    label: "メモリ検索プロバイダー",
    help: "埋め込みプロバイダー（\"openai\"、\"gemini\"、または\"local\"）",
  },
  "agents.defaults.memorySearch.remote": {
    label: "リモート埋め込み",
  },
  "agents.defaults.memorySearch.remote.baseUrl": {
    label: "リモート埋め込みベースURL",
    help: "リモート埋め込み用のカスタムベースURL（OpenAI互換プロキシまたはGeminiオーバーライド）",
  },
  "agents.defaults.memorySearch.remote.apiKey": {
    label: "リモート埋め込みAPIキー",
    help: "リモート埋め込みプロバイダー用のカスタムAPIキー",
  },
  "agents.defaults.memorySearch.remote.headers": {
    label: "リモート埋め込みヘッダー",
    help: "リモート埋め込み用の追加ヘッダー（マージ、リモートがOpenAIヘッダーを上書き）",
  },
  "agents.defaults.memorySearch.remote.batch.concurrency": {
    label: "リモートバッチ同時実行数",
    help: "メモリインデックスの最大同時埋め込みバッチジョブ数（デフォルト: 2）",
  },
  "agents.defaults.memorySearch.model": {
    label: "メモリ検索モデル",
    help: "メモリ検索で使用するモデル",
  },
  "agents.defaults.memorySearch.fallback": {
    label: "メモリ検索フォールバック",
    help: "埋め込み失敗時のフォールバックプロバイダー（\"openai\"、\"gemini\"、\"local\"、または\"none\"）",
  },
  "agents.defaults.memorySearch.local.modelPath": {
    label: "ローカル埋め込みモデルパス",
    help: "ローカルGGUFモデルパスまたはhf: URI（node-llama-cpp）",
  },
  "agents.defaults.memorySearch.store": {
    label: "メモリストア",
  },
  "agents.defaults.memorySearch.store.path": {
    label: "メモリ検索インデックスパス",
    help: "SQLiteインデックスパス（デフォルト: ~/.openclaw/memory/{agentId}.sqlite）",
  },
  "agents.defaults.memorySearch.store.vector.enabled": {
    label: "メモリ検索ベクトルインデックス",
    help: "ベクトル検索用のsqlite-vec拡張を有効にする（デフォルト: true）",
  },
  "agents.defaults.memorySearch.store.vector.extensionPath": {
    label: "メモリ検索ベクトル拡張パス",
    help: "sqlite-vec拡張ライブラリへのオプション上書きパス（.dylib/.so/.dll）",
  },
  "agents.defaults.memorySearch.chunking": {
    label: "メモリチャンキング",
  },
  "agents.defaults.memorySearch.chunking.tokens": {
    label: "メモリチャンクトークン数",
    help: "チャンクあたりのトークン数",
  },
  "agents.defaults.memorySearch.chunking.overlap": {
    label: "メモリチャンクオーバーラップトークン数",
    help: "チャンク間のオーバーラップトークン数",
  },
  "agents.defaults.memorySearch.sync": {
    label: "メモリ同期",
  },
  "agents.defaults.memorySearch.sync.onSessionStart": {
    label: "セッション開始時にインデックス",
    help: "セッション開始時にインデックスを作成する",
  },
  "agents.defaults.memorySearch.sync.onSearch": {
    label: "検索時にインデックス（遅延）",
    help: "遅延同期: 変更後の検索時に再インデックスをスケジュール",
  },
  "agents.defaults.memorySearch.sync.watch": {
    label: "メモリファイル監視",
    help: "メモリファイルの変更を監視（chokidar）",
  },
  "agents.defaults.memorySearch.sync.watchDebounceMs": {
    label: "メモリ監視デバウンス（ミリ秒）",
    help: "メモリ監視のデバウンス時間（ミリ秒）",
  },
  "agents.defaults.memorySearch.sync.sessions": {
    label: "セッション同期",
  },
  "agents.defaults.memorySearch.sync.sessions.deltaBytes": {
    label: "セッションデルタバイト数",
    help: "セッショントランスクリプトが再インデックスをトリガーする前の最小追加バイト数（デフォルト: 100000）",
  },
  "agents.defaults.memorySearch.sync.sessions.deltaMessages": {
    label: "セッションデルタメッセージ数",
    help: "セッショントランスクリプトが再インデックスをトリガーする前の最小追加JSONL行数（デフォルト: 50）",
  },
  "agents.defaults.memorySearch.query": {
    label: "メモリクエリ",
  },
  "agents.defaults.memorySearch.query.maxResults": {
    label: "メモリ検索最大結果数",
    help: "メモリ検索の最大結果数",
  },
  "agents.defaults.memorySearch.query.minScore": {
    label: "メモリ検索最小スコア",
    help: "メモリ検索の最小スコア",
  },
  "agents.defaults.memorySearch.query.hybrid": {
    label: "ハイブリッド検索",
  },
  "agents.defaults.memorySearch.query.hybrid.enabled": {
    label: "メモリ検索ハイブリッド",
    help: "メモリのハイブリッドBM25 + ベクトル検索を有効にする（デフォルト: true）",
  },
  "agents.defaults.memorySearch.query.hybrid.vectorWeight": {
    label: "メモリ検索ベクトル重み",
    help: "結果マージ時のベクトル類似度の重み（0-1）",
  },
  "agents.defaults.memorySearch.query.hybrid.textWeight": {
    label: "メモリ検索テキスト重み",
    help: "結果マージ時のBM25テキスト関連性の重み（0-1）",
  },
  "agents.defaults.memorySearch.query.hybrid.candidateMultiplier": {
    label: "メモリ検索ハイブリッド候補倍率",
    help: "候補プールサイズの倍率（デフォルト: 4）",
  },
  "agents.defaults.memorySearch.cache": {
    label: "埋め込みキャッシュ",
  },
  "agents.defaults.memorySearch.cache.enabled": {
    label: "メモリ検索埋め込みキャッシュ",
    help: "再インデックスと頻繁な更新を高速化するためにSQLiteにチャンク埋め込みをキャッシュ（デフォルト: true）",
  },
  "agents.defaults.memorySearch.cache.maxEntries": {
    label: "メモリ検索埋め込みキャッシュ最大エントリ数",
    help: "キャッシュされた埋め込みのオプション上限（ベストエフォート）",
  },
  "agents.defaults.memorySearch.remote.batch": {
    label: "バッチ処理",
  },
  "agents.defaults.memorySearch.remote.batch.enabled": {
    label: "バッチAPI有効",
    help: "メモリ埋め込みのバッチAPIを有効にする（OpenAI/Gemini、デフォルト: true）",
  },
  "agents.defaults.memorySearch.remote.batch.pollIntervalMs": {
    label: "ポーリング間隔（ミリ秒）",
    help: "バッチステータスのポーリング間隔（ミリ秒）（デフォルト: 2000）",
  },
  "agents.defaults.memorySearch.remote.batch.timeoutMinutes": {
    label: "タイムアウト（分）",
    help: "バッチインデックスのタイムアウト（分）（デフォルト: 60）",
  },
  "agents.defaults.memorySearch.remote.batch.wait": {
    label: "完了待機",
    help: "インデックス時にバッチ完了を待機する（デフォルト: true）",
  },
  "agents.defaults.memorySearch.local": {
    label: "ローカル埋め込み",
  },
  "agents.defaults.memorySearch.local.modelCacheDir": {
    label: "モデルキャッシュディレクトリ",
    help: "ローカル埋め込みモデルのキャッシュディレクトリ",
  },

  // ========================================
  // Agents Defaults - Block Streaming section
  // ========================================
  "agents.defaults.blockStreaming": {
    label: "ブロックストリーミング",
  },
  "agents.defaults.blockStreaming.default": {
    label: "ブロックストリーミングデフォルト",
    help: "ブロックストリーミングのデフォルト設定（\"off\"または\"on\"）",
  },
  "agents.defaults.blockStreaming.break": {
    label: "ブロックストリーミング区切り",
  },
  "agents.defaults.blockStreaming.break.breakPreference": {
    label: "区切り優先",
    help: "優先する区切りポイント（\"paragraph\"、\"newline\"、または\"sentence\"）",
  },
  "agents.defaults.blockStreaming.break.minChars": {
    label: "最小文字数",
    help: "区切り前の最小文字数",
  },
  "agents.defaults.blockStreaming.break.maxChars": {
    label: "最大文字数",
    help: "区切りの最大文字数",
  },
  "agents.defaults.blockStreaming.break.textEnd": {
    label: "テキスト終了",
    help: "テキスト終了時の区切り設定",
  },
  "agents.defaults.blockStreaming.break.messageEnd": {
    label: "メッセージ終了",
    help: "メッセージ終了時の区切り設定",
  },
  "agents.defaults.blockStreaming.coalesce": {
    label: "ブロックストリーミング統合",
  },
  "agents.defaults.blockStreaming.coalesce.idleMs": {
    label: "アイドル時間（ミリ秒）",
    help: "統合のアイドル時間（ミリ秒）",
  },
  "agents.defaults.blockStreaming.coalesce.minChars": {
    label: "最小文字数",
    help: "統合の最小文字数",
  },
  "agents.defaults.blockStreaming.coalesce.maxChars": {
    label: "最大文字数",
    help: "統合の最大文字数",
  },
  "agents.defaults.blockStreaming.chunk": {
    label: "チャンク設定",
  },

  // ========================================
  // Agents Defaults - Compaction section
  // ========================================
  "agents.defaults.compaction": {
    label: "コンパクション",
  },
  "agents.defaults.compaction.memoryFlush": {
    label: "メモリフラッシュ",
  },
  "agents.defaults.compaction.memoryFlush.enabled": {
    label: "メモリフラッシュ有効",
    help: "コンパクション時にメモリをフラッシュする",
  },
  "agents.defaults.compaction.prompt": {
    label: "プロンプト設定",
  },
  "agents.defaults.compaction.prompt.softThresholdTokens": {
    label: "ソフト閾値トークン数",
    help: "コンパクションをトリガーするソフト閾値トークン数",
  },
  "agents.defaults.compaction.systemPrompt": {
    label: "システムプロンプト",
  },
  "agents.defaults.compaction.systemPrompt.mode": {
    label: "システムプロンプトモード",
    help: "システムプロンプトモード（\"default\"または\"safeguard\"）",
  },
  "agents.defaults.compaction.systemPrompt.reserveTokensFloor": {
    label: "予約トークン下限",
    help: "システムプロンプト用に予約するトークン数の下限",
  },

  // ========================================
  // Agents Defaults - Context Pruning section
  // ========================================
  "agents.defaults.contextPruning": {
    label: "コンテキストプルーニング",
  },
  "agents.defaults.contextPruning.mode": {
    label: "プルーニングモード",
    help: "コンテキストプルーニングモード（\"off\"または\"cache-ttl\"）",
  },
  "agents.defaults.contextPruning.hardClear": {
    label: "ハードクリア",
  },
  "agents.defaults.contextPruning.hardClear.enabled": {
    label: "ハードクリア有効",
    help: "ハードクリアを有効にする",
  },
  "agents.defaults.contextPruning.hardClear.placeholder": {
    label: "プレースホルダー",
    help: "ハードクリア時のプレースホルダーテキスト",
  },
  "agents.defaults.contextPruning.hardClear.ratio": {
    label: "ハードクリア比率",
    help: "ハードクリアをトリガーする比率",
  },
  "agents.defaults.contextPruning.keepLastAssistants": {
    label: "最後のアシスタント保持数",
    help: "保持する最後のアシスタントメッセージ数",
  },
  "agents.defaults.contextPruning.minPrunableToolChars": {
    label: "最小プルーニング可能ツール文字数",
    help: "プルーニング対象となる最小ツール出力文字数",
  },
  "agents.defaults.contextPruning.softTrim": {
    label: "ソフトトリム",
  },
  "agents.defaults.contextPruning.softTrim.headChars": {
    label: "先頭文字数",
    help: "保持する先頭文字数",
  },
  "agents.defaults.contextPruning.softTrim.maxChars": {
    label: "最大文字数",
    help: "ソフトトリムの最大文字数",
  },
  "agents.defaults.contextPruning.softTrim.tailChars": {
    label: "末尾文字数",
    help: "保持する末尾文字数",
  },
  "agents.defaults.contextPruning.softTrimRatio": {
    label: "ソフトトリム比率",
    help: "ソフトトリムをトリガーする比率",
  },
  "agents.defaults.contextPruning.ttl": {
    label: "TTL",
  },
  "agents.defaults.contextPruning.ttl.contextTokens": {
    label: "コンテキストトークン数",
    help: "TTL用のコンテキストトークン数",
  },
  "agents.defaults.contextPruning.tools": {
    label: "ツール設定",
  },
  "agents.defaults.contextPruning.tools.allow": {
    label: "許可",
    help: "プルーニングを許可するツール",
  },
  "agents.defaults.contextPruning.tools.deny": {
    label: "拒否",
    help: "プルーニングを拒否するツール",
  },

  // ========================================
  // Agents Defaults - Sandbox section
  // ========================================
  "agents.defaults.sandbox": {
    label: "サンドボックス",
  },
  "agents.defaults.sandbox.mode": {
    label: "サンドボックスモード",
    help: "サンドボックスモード（\"off\"、\"non-main\"、または\"all\"）",
  },
  "agents.defaults.sandbox.perSession": {
    label: "セッション別",
    help: "セッションごとにサンドボックスを分離する",
  },
  "agents.defaults.sandbox.scope": {
    label: "スコープ",
    help: "サンドボックススコープ（\"session\"、\"agent\"、または\"shared\"）",
  },
  "agents.defaults.sandbox.sessionToolsVisibility": {
    label: "セッションツール可視性",
    help: "サンドボックス内のセッションツール可視性（\"spawned\"または\"all\"）",
  },
  "agents.defaults.sandbox.workspaceAccess": {
    label: "ワークスペースアクセス",
    help: "ワークスペースアクセス権限（\"none\"、\"ro\"、または\"rw\"）",
  },
  "agents.defaults.sandbox.workspaceRoot": {
    label: "ワークスペースルート",
    help: "サンドボックス内のワークスペースルート",
  },
  "agents.defaults.sandbox.prune": {
    label: "プルーン設定",
  },
  "agents.defaults.sandbox.prune.idleHours": {
    label: "アイドル時間（時間）",
    help: "アイドルコンテナを削除するまでの時間",
  },
  "agents.defaults.sandbox.prune.maxAgeDays": {
    label: "最大経過日数",
    help: "コンテナを削除するまでの最大日数",
  },
  "agents.defaults.sandbox.browser": {
    label: "ブラウザ設定",
  },
  "agents.defaults.sandbox.browser.enabled": {
    label: "ブラウザ有効",
    help: "サンドボックスブラウザを有効にする",
  },
  "agents.defaults.sandbox.browser.headless": {
    label: "ヘッドレス",
    help: "ヘッドレスモードでブラウザを実行する",
  },
  "agents.defaults.sandbox.browser.autoStart": {
    label: "自動起動",
    help: "サンドボックス起動時にブラウザを自動起動する",
  },
  "agents.defaults.sandbox.browser.autoStartTimeoutMs": {
    label: "自動起動タイムアウト（ミリ秒）",
    help: "ブラウザ自動起動のタイムアウト（ミリ秒）",
  },
  "agents.defaults.sandbox.browser.cdpPort": {
    label: "CDPポート",
    help: "Chrome DevTools Protocolポート",
  },
  "agents.defaults.sandbox.browser.vncPort": {
    label: "VNCポート",
    help: "VNCポート",
  },
  "agents.defaults.sandbox.browser.noVncPort": {
    label: "noVNCポート",
    help: "noVNCポート",
  },
  "agents.defaults.sandbox.browser.enableNoVnc": {
    label: "noVNC有効",
    help: "noVNCを有効にする",
  },
  "agents.defaults.sandbox.browser.image": {
    label: "イメージ",
    help: "ブラウザコンテナイメージ",
  },
  "agents.defaults.sandbox.browser.containerPrefix": {
    label: "コンテナプレフィックス",
    help: "ブラウザコンテナ名のプレフィックス",
  },
  "agents.defaults.sandbox.browser.allowHostControl": {
    label: "ホスト制御許可",
    help: "ホストからのブラウザ制御を許可する",
  },
  "agents.defaults.sandbox.browser.allowedControlHosts": {
    label: "許可制御ホスト",
    help: "ブラウザ制御を許可するホストのリスト",
  },
  "agents.defaults.sandbox.browser.allowedControlPorts": {
    label: "許可制御ポート",
    help: "ブラウザ制御を許可するポートのリスト",
  },
  "agents.defaults.sandbox.browser.allowedControlUrls": {
    label: "許可制御URL",
    help: "ブラウザ制御を許可するURLのリスト",
  },
  "agents.defaults.sandbox.docker": {
    label: "Docker設定",
  },
  "agents.defaults.sandbox.docker.image": {
    label: "イメージ",
    help: "Dockerイメージ",
  },
  "agents.defaults.sandbox.docker.containerPrefix": {
    label: "コンテナプレフィックス",
    help: "コンテナ名のプレフィックス",
  },
  "agents.defaults.sandbox.docker.user": {
    label: "ユーザー",
    help: "コンテナ内で実行するユーザー",
  },
  "agents.defaults.sandbox.docker.workdir": {
    label: "作業ディレクトリ",
    help: "コンテナ内の作業ディレクトリ",
  },
  "agents.defaults.sandbox.docker.network": {
    label: "ネットワーク",
    help: "Dockerネットワーク",
  },
  "agents.defaults.sandbox.docker.memory": {
    label: "メモリ",
    help: "メモリ制限",
  },
  "agents.defaults.sandbox.docker.memorySwap": {
    label: "メモリスワップ",
    help: "メモリスワップ制限",
  },
  "agents.defaults.sandbox.docker.cpus": {
    label: "CPU数",
    help: "CPU制限",
  },
  "agents.defaults.sandbox.docker.pidsLimit": {
    label: "PID制限",
    help: "最大プロセス数",
  },
  "agents.defaults.sandbox.docker.readOnlyRoot": {
    label: "読み取り専用ルート",
    help: "ルートファイルシステムを読み取り専用にする",
  },
  "agents.defaults.sandbox.docker.seccompProfile": {
    label: "Seccompプロファイル",
    help: "Seccompセキュリティプロファイル",
  },
  "agents.defaults.sandbox.docker.apparmorProfile": {
    label: "AppArmorプロファイル",
    help: "AppArmorセキュリティプロファイル",
  },
  "agents.defaults.sandbox.docker.binds": {
    label: "バインドマウント",
    help: "バインドマウントのリスト",
  },
  "agents.defaults.sandbox.docker.tmpfs": {
    label: "tmpfs",
    help: "tmpfsマウントのリスト",
  },
  "agents.defaults.sandbox.docker.capDrop": {
    label: "削除ケイパビリティ",
    help: "削除するLinuxケイパビリティのリスト",
  },
  "agents.defaults.sandbox.docker.dns": {
    label: "DNS",
    help: "DNSサーバーのリスト",
  },
  "agents.defaults.sandbox.docker.env": {
    label: "環境変数",
    help: "環境変数",
  },
  "agents.defaults.sandbox.docker.extraHosts": {
    label: "追加ホスト",
    help: "追加の/etc/hostsエントリ",
  },
  "agents.defaults.sandbox.docker.ulimits": {
    label: "ulimits",
    help: "ulimits設定",
  },
  "agents.defaults.sandbox.docker.setupCommand": {
    label: "セットアップコマンド",
    help: "コンテナ起動時に実行するセットアップコマンド",
  },

  // ========================================
  // Agents Defaults - Subagents section
  // ========================================
  "agents.defaults.subagents": {
    label: "サブエージェント",
  },
  "agents.defaults.subagents.maxConcurrent": {
    label: "最大同時実行数",
    help: "同時に実行できるサブエージェントの最大数",
  },
  "agents.defaults.subagents.archiveAfterMinutes": {
    label: "アーカイブまでの時間（分）",
    help: "非アクティブなサブエージェントをアーカイブするまでの時間（分）",
  },
  "agents.defaults.subagents.model": {
    label: "サブエージェントモデル",
    help: "サブエージェントに使用するモデル",
  },
  "agents.defaults.elevated": {
    label: "昇格権限デフォルト",
    help: "昇格権限のデフォルト設定（\"off\"、\"on\"、\"ask\"、または\"full\"）",
  },
  "agents.defaults.skipBootstrap": {
    label: "ブートストラップスキップ",
    help: "ブートストラップ処理をスキップする",
  },
  "agents.defaults.thinkingDefault": {
    label: "思考デフォルト",
    help: "思考機能のデフォルト設定",
  },
  "agents.defaults.timeFormat": {
    label: "時刻形式",
    help: "時刻表示形式（\"auto\"、\"12\"、または\"24\"）",
  },
  "agents.defaults.timeoutSeconds": {
    label: "タイムアウト（秒）",
    help: "エージェントのタイムアウト時間（秒）",
  },
  "agents.defaults.typingIntervalSeconds": {
    label: "タイピング間隔（秒）",
    help: "タイピングインジケーターの更新間隔（秒）",
  },
  "agents.defaults.typingMode": {
    label: "タイピングモード",
    help: "タイピングインジケーターモード（\"never\"、\"instant\"、\"thinking\"、または\"message\"）",
  },
  "agents.defaults.userTimezone": {
    label: "ユーザータイムゾーン",
    help: "ユーザーのタイムゾーン",
  },
  "agents.defaults.verboseDefault": {
    label: "詳細出力デフォルト",
    help: "詳細出力のデフォルト設定（\"off\"、\"on\"、または\"full\"）",
  },
  "agents.defaults.blockStreamingDefault": {
    label: "ブロックストリーミングデフォルト",
    help: "ブロックストリーミングのデフォルト設定（off/on）",
  },
  "agents.defaults.blockStreamingBreak": {
    label: "ブロックストリーミング区切り",
    help: "ブロックストリーミングの区切りタイミング（text_end/message_end）",
  },
  "agents.defaults.blockStreamingChunk": {
    label: "ブロックストリーミングチャンク",
    help: "ブロックストリーミングのチャンク設定",
  },
  "agents.defaults.blockStreamingChunk.minChars": {
    label: "最小文字数",
    help: "チャンクの最小文字数",
  },
  "agents.defaults.blockStreamingChunk.maxChars": {
    label: "最大文字数",
    help: "チャンクの最大文字数",
  },
  "agents.defaults.blockStreamingChunk.breakPreference": {
    label: "区切り優先度",
    help: "区切り位置の優先度（paragraph/newline/sentence）",
  },
  "agents.defaults.blockStreamingCoalesce": {
    label: "ブロックストリーミング結合",
    help: "ブロックストリーミングの結合設定",
  },
  "agents.defaults.blockStreamingCoalesce.minChars": {
    label: "最小文字数",
    help: "結合の最小文字数",
  },
  "agents.defaults.blockStreamingCoalesce.maxChars": {
    label: "最大文字数",
    help: "結合の最大文字数",
  },
  "agents.defaults.blockStreamingCoalesce.idleMs": {
    label: "アイドル時間（ミリ秒）",
    help: "結合のアイドル時間（ミリ秒）",
  },
  "agents.defaults.maxConcurrent": {
    label: "最大同時実行数",
    help: "同時に実行できるエージェントの最大数",
  },
  "agents.defaults.mediaMb": {
    label: "メディア最大MB",
    help: "メディアファイルの最大サイズ（MB）",
  },
  "agents.defaults.heartbeat": {
    label: "ハートビート",
  },
  "agents.defaults.heartbeat.every": {
    label: "間隔",
    help: "ハートビート間隔",
  },
  "agents.defaults.heartbeat.session": {
    label: "セッション",
    help: "ハートビートセッション",
  },
  "agents.defaults.heartbeat.target": {
    label: "ターゲット",
    help: "ハートビートターゲット",
  },
  "agents.defaults.heartbeat.to": {
    label: "宛先",
    help: "ハートビート送信先",
  },
  "agents.defaults.heartbeat.prompt": {
    label: "プロンプト",
    help: "ハートビートプロンプト",
  },
  "agents.defaults.heartbeat.model": {
    label: "モデル",
    help: "ハートビートに使用するモデル",
  },
  "agents.defaults.heartbeat.includeReasoning": {
    label: "推論を含める",
    help: "ハートビートに推論を含める",
  },
  "agents.defaults.heartbeat.ackMaxChars": {
    label: "確認応答最大文字数",
    help: "確認応答の最大文字数",
  },
  "agents.defaults.heartbeat.activeHours": {
    label: "アクティブ時間",
  },
  "agents.defaults.heartbeat.activeHours.start": {
    label: "開始時刻",
    help: "アクティブ時間の開始",
  },
  "agents.defaults.heartbeat.activeHours.end": {
    label: "終了時刻",
    help: "アクティブ時間の終了",
  },
  "agents.defaults.heartbeat.activeHours.timezone": {
    label: "タイムゾーン",
    help: "アクティブ時間のタイムゾーン",
  },

  // ========================================
  // Channels section
  // ========================================
  "channels.telegram": {
    label: "Telegram",
  },
  "channels.telegram.token": {
    label: "Botトークン",
    help: "Telegram Botのトークン",
  },
  "channels.telegram.botToken": {
    label: "Botトークン",
    help: "Telegram Botのトークン",
  },
  "channels.telegram.enabled": {
    label: "有効",
  },
  "channels.telegram.accounts": {
    label: "アカウント",
  },
  "channels.telegram.name": {
    label: "名前",
    help: "このアカウントの表示名",
  },
  "channels.telegram.capabilities": {
    label: "機能タグ",
  },
  "channels.telegram.commands": {
    label: "コマンド",
  },
  "channels.telegram.commands.native": {
    label: "ネイティブ",
  },
  "channels.telegram.commands.nativeSkills": {
    label: "ネイティブスキル",
  },
  "channels.telegram.customCommands": {
    label: "カスタムコマンド",
  },
  "channels.telegram.dmPolicy": {
    label: "DMポリシー",
    help: "ダイレクトメッセージのアクセスポリシー",
  },
  "channels.telegram.allowFrom": {
    label: "許可送信者",
  },
  "channels.telegram.groupAllowFrom": {
    label: "グループ許可送信者",
  },
  "channels.telegram.groupPolicy": {
    label: "グループポリシー",
  },
  "channels.telegram.historyLimit": {
    label: "履歴制限",
  },
  "channels.telegram.dmHistoryLimit": {
    label: "DM履歴制限",
  },
  "channels.telegram.textChunkLimit": {
    label: "テキストチャンク制限",
  },
  "channels.telegram.chunkMode": {
    label: "チャンクモード",
  },
  "channels.telegram.blockStreaming": {
    label: "ブロックストリーミング",
  },
  "channels.telegram.blockStreamingCoalesce": {
    label: "ブロックストリーミング結合",
  },
  "channels.telegram.blockStreamingCoalesce.idleMs": {
    label: "アイドル時間（ミリ秒）",
  },
  "channels.telegram.blockStreamingCoalesce.maxChars": {
    label: "最大文字数",
  },
  "channels.telegram.blockStreamingCoalesce.minChars": {
    label: "最小文字数",
  },
  "channels.telegram.streamMode": {
    label: "ストリームモード",
  },
  "channels.telegram.mediaMaxMb": {
    label: "メディア最大サイズ（MB）",
  },
  "channels.telegram.actions": {
    label: "アクション",
  },
  "channels.telegram.actions.reactions": {
    label: "リアクション",
  },
  "channels.telegram.actions.sendMessage": {
    label: "メッセージ送信",
  },
  "channels.telegram.actions.deleteMessage": {
    label: "メッセージ削除",
  },
  "channels.telegram.actions.editMessage": {
    label: "メッセージ編集",
  },
  "channels.telegram.actions.sticker": {
    label: "ステッカー",
  },
  "channels.telegram.reactionNotifications": {
    label: "リアクション通知",
  },
  "channels.telegram.reactionLevel": {
    label: "リアクションレベル",
  },
  "channels.telegram.replyToMode": {
    label: "返信モード",
  },
  "channels.telegram.groups": {
    label: "グループ",
  },
  "channels.telegram.webhookUrl": {
    label: "Webhook URL",
  },
  "channels.telegram.webhookSecret": {
    label: "Webhookシークレット",
  },
  "channels.telegram.proxy": {
    label: "プロキシ",
  },
  "channels.telegram.linkPreview": {
    label: "リンクプレビュー",
  },
  "channels.telegram.draftChunk": {
    label: "ドラフトチャンク",
  },
  "channels.telegram.draftChunk.minChars": {
    label: "ドラフトチャンク最小文字数",
    help: "channels.telegram.streamMode=\"block\"時にTelegramドラフト更新を発行する前の最小文字数（デフォルト: 200）",
  },
  "channels.telegram.draftChunk.maxChars": {
    label: "ドラフトチャンク最大文字数",
    help: "channels.telegram.streamMode=\"block\"時のTelegramドラフト更新チャンクのターゲット最大サイズ（デフォルト: 800）",
  },
  "channels.telegram.draftChunk.breakPreference": {
    label: "ドラフトチャンク改行優先",
    help: "Telegramドラフトチャンクの優先改行ポイント（paragraph | newline | sentence）。デフォルト: paragraph",
  },
  "channels.telegram.retry": {
    label: "リトライ",
  },
  "channels.telegram.retry.attempts": {
    label: "Telegramリトライ試行回数",
    help: "送信Telegram APIコールの最大リトライ試行回数（デフォルト: 3）",
  },
  "channels.telegram.retry.minDelayMs": {
    label: "Telegramリトライ最小遅延（ミリ秒）",
    help: "Telegram送信コールの最小リトライ遅延（ミリ秒）",
  },
  "channels.telegram.retry.maxDelayMs": {
    label: "Telegramリトライ最大遅延（ミリ秒）",
    help: "Telegram送信コールの最大リトライ遅延上限（ミリ秒）",
  },
  "channels.telegram.retry.jitter": {
    label: "Telegramリトライジッター",
    help: "Telegramリトライ遅延に適用されるジッター係数（0-1）",
  },
  "channels.telegram.network": {
    label: "ネットワーク",
  },
  "channels.telegram.network.autoSelectFamily": {
    label: "Telegram autoSelectFamily",
    help: "Telegram用のNode autoSelectFamilyを上書き（true=有効、false=無効）",
  },
  "channels.telegram.timeoutSeconds": {
    label: "Telegram APIタイムアウト（秒）",
    help: "Telegram APIリクエストが中止されるまでの最大秒数（デフォルト: grammY準拠500）",
  },
  "channels.telegram.capabilities.inlineButtons": {
    label: "Telegramインラインボタン",
    help: "Telegramインラインボタン機能",
  },
  "channels.discord": {
    label: "Discord",
    help: "現在、十分にサポートされています。",
  },
  "channels.discord.token": {
    label: "Botトークン",
    help: "Discord Botのトークン",
  },
  "channels.discord.enabled": {
    label: "有効",
  },
  "channels.discord.accounts": {
    label: "アカウント",
  },
  "channels.discord.accounts.*.name": {
    label: "名前",
    help: "このアカウントの表示名",
  },
  "channels.discord.accounts.*.enabled": {
    label: "有効",
    help: "このアカウントを有効にする",
  },
  "channels.discord.accounts.*.token": {
    label: "トークン",
    help: "Discord Botトークン",
  },
  "channels.discord.accounts.*.capabilities": {
    label: "機能タグ",
    help: "プロバイダー機能タグ",
  },
  "channels.discord.accounts.*.commands": {
    label: "コマンド",
  },
  "channels.discord.accounts.*.commands.native": {
    label: "ネイティブ",
    help: "ネイティブコマンドの登録を上書き",
  },
  "channels.discord.accounts.*.commands.nativeSkills": {
    label: "ネイティブスキル",
    help: "ネイティブスキルコマンドの登録を上書き",
  },
  "channels.discord.accounts.*.allowBots": {
    label: "ボットを許可",
    help: "ボットからのメッセージに返信を許可",
  },
  "channels.discord.accounts.*.blockStreaming": {
    label: "ブロックストリーミング",
    help: "ブロックストリーミングを無効にする",
  },
  "channels.discord.accounts.*.blockStreamingCoalesce": {
    label: "ブロックストリーミング結合",
  },
  "channels.discord.accounts.*.blockStreamingCoalesce.idleMs": {
    label: "アイドル時間（ミリ秒）",
  },
  "channels.discord.accounts.*.blockStreamingCoalesce.maxChars": {
    label: "最大文字数",
  },
  "channels.discord.accounts.*.blockStreamingCoalesce.minChars": {
    label: "最小文字数",
  },
  "channels.discord.accounts.*.actions": {
    label: "アクション",
  },
  "channels.discord.accounts.*.actions.channelInfo": {
    label: "チャンネル情報",
  },
  "channels.discord.accounts.*.actions.channels": {
    label: "チャンネル",
  },
  "channels.discord.accounts.*.actions.emojiUploads": {
    label: "絵文字アップロード",
  },
  "channels.discord.accounts.*.actions.events": {
    label: "イベント",
  },
  "channels.discord.accounts.*.actions.memberInfo": {
    label: "メンバー情報",
  },
  "channels.discord.accounts.*.actions.messages": {
    label: "メッセージ",
  },
  "channels.discord.accounts.*.actions.moderation": {
    label: "モデレーション",
  },
  "channels.discord.accounts.*.actions.permissions": {
    label: "権限",
  },
  "channels.discord.accounts.*.actions.pins": {
    label: "ピン",
  },
  "channels.discord.accounts.*.actions.polls": {
    label: "投票",
  },
  "channels.discord.accounts.*.actions.reactions": {
    label: "リアクション",
  },
  "channels.discord.accounts.*.actions.roleInfo": {
    label: "ロール情報",
  },
  "channels.discord.accounts.*.actions.roles": {
    label: "ロール",
  },
  "channels.discord.accounts.*.actions.search": {
    label: "検索",
  },
  "channels.discord.accounts.*.actions.stickers": {
    label: "ステッカー",
  },
  "channels.discord.accounts.*.actions.stickerUploads": {
    label: "ステッカーアップロード",
  },
  "channels.discord.accounts.*.actions.threads": {
    label: "スレッド",
  },
  "channels.discord.accounts.*.actions.voiceStatus": {
    label: "ボイスステータス",
  },
  "channels.discord.actions": {
    label: "アクション",
  },
  "channels.discord.actions.channelInfo": {
    label: "チャンネル情報",
    help: "チャンネル情報の取得を許可",
  },
  "channels.discord.actions.channels": {
    label: "チャンネル",
    help: "チャンネルへのアクセスを許可",
  },
  "channels.discord.actions.emojiUploads": {
    label: "絵文字アップロード",
    help: "絵文字のアップロードを許可",
  },
  "channels.discord.actions.events": {
    label: "イベント",
    help: "イベントへのアクセスを許可",
  },
  "channels.discord.actions.memberInfo": {
    label: "メンバー情報",
    help: "メンバー情報の取得を許可",
  },
  "channels.discord.actions.messages": {
    label: "メッセージ",
    help: "メッセージの読み書きを許可",
  },
  "channels.discord.actions.moderation": {
    label: "モデレーション",
    help: "タイムアウト、キック、BANなどのモデレーションアクションを許可",
  },
  "channels.discord.actions.permissions": {
    label: "権限",
    help: "チャンネル権限の取得を許可",
  },
  "channels.discord.actions.pins": {
    label: "ピン",
    help: "メッセージのピン留めを許可",
  },
  "channels.discord.actions.polls": {
    label: "投票",
    help: "投票の作成を許可",
  },
  "channels.discord.actions.reactions": {
    label: "リアクション",
    help: "リアクションの追加・取得を許可",
  },
  "channels.discord.actions.roleInfo": {
    label: "ロール情報",
    help: "ロール情報の取得を許可",
  },
  "channels.discord.actions.roles": {
    label: "ロール",
    help: "ロールの付与・削除を許可",
  },
  "channels.discord.actions.search": {
    label: "検索",
    help: "メッセージ検索を許可",
  },
  "channels.discord.actions.stickers": {
    label: "ステッカー",
    help: "ステッカーの使用を許可",
  },
  "channels.discord.actions.stickerUploads": {
    label: "ステッカーアップロード",
    help: "ステッカーのアップロードを許可",
  },
  "channels.discord.actions.threads": {
    label: "スレッド",
    help: "スレッドの作成・操作を許可",
  },
  "channels.discord.actions.voiceStatus": {
    label: "ボイスステータス",
    help: "ボイスチャンネルの状態取得を許可",
  },
  "channels.discord.allowBots": {
    label: "ボットを許可",
    help: "ボットからのメッセージに返信を許可（デフォルト: false）",
  },
  "channels.discord.blockStreaming": {
    label: "ブロックストリーミング",
    help: "このアカウントのブロックストリーミングを無効にする",
  },
  "channels.discord.blockStreamingCoalesce": {
    label: "ブロックストリーミング結合",
    help: "ストリーミングされたブロック返信を送信前に結合",
  },
  "channels.discord.blockStreamingCoalesce.idleMs": {
    label: "アイドル時間（ミリ秒）",
    help: "結合のアイドル待機時間（ミリ秒）",
  },
  "channels.discord.blockStreamingCoalesce.maxChars": {
    label: "最大文字数",
    help: "結合の最大文字数",
  },
  "channels.discord.blockStreamingCoalesce.minChars": {
    label: "最小文字数",
    help: "結合の最小文字数",
  },
  "channels.discord.capabilities": {
    label: "機能タグ",
    help: "エージェント/ランタイムガイダンス用のプロバイダー機能タグ",
  },
  "channels.discord.chunkMode": {
    label: "チャンクモード",
    help: "分割モード: lengthはサイズで分割、newlineは改行で分割",
  },
  "channels.discord.commands": {
    label: "コマンド",
    help: "Discordネイティブコマンドの登録設定",
  },
  "channels.discord.commands.native": {
    label: "ネイティブ",
    help: "Discordネイティブコマンドの登録を上書き（bool または \"auto\"）",
  },
  "channels.discord.commands.nativeSkills": {
    label: "ネイティブスキル",
    help: "Discordネイティブスキルコマンドの登録を上書き（bool または \"auto\"）",
  },
  "channels.discord.configWrites": {
    label: "設定書き込み",
    help: "チャンネルからの設定書き込みを許可（デフォルト: true）",
  },
  "channels.discord.dm": {
    label: "ダイレクトメッセージ",
    help: "DM設定",
  },
  "channels.discord.dm.enabled": {
    label: "有効",
    help: "Discord DMを有効にする（デフォルト: true）",
  },
  "channels.discord.dm.policy": {
    label: "ポリシー",
    help: "DMアクセスポリシー（デフォルト: pairing）",
  },
  "channels.discord.dm.allowFrom": {
    label: "許可送信者",
    help: "DM送信者の許可リスト（IDまたは名前）",
  },
  "channels.discord.dm.groupEnabled": {
    label: "グループDM有効",
    help: "グループDMを許可（デフォルト: false）",
  },
  "channels.discord.dm.groupChannels": {
    label: "グループチャンネル",
    help: "グループDMチャンネルの許可リスト（IDまたはスラッグ）",
  },
  "channels.discord.dmHistoryLimit": {
    label: "DM履歴制限",
    help: "履歴コンテキストとして保持する最大DMターン数",
  },
  "channels.discord.dms": {
    label: "DM設定",
    help: "ユーザーID別のDM設定オーバーライド",
  },
  "channels.discord.execApprovals": {
    label: "実行承認",
    help: "実行承認転送設定",
  },
  "channels.discord.execApprovals.enabled": {
    label: "有効",
    help: "Discord DMへの実行承認転送を有効にする",
  },
  "channels.discord.execApprovals.approvers": {
    label: "承認者",
    help: "承認プロンプトを受け取るDiscordユーザーID",
  },
  "channels.discord.execApprovals.agentFilter": {
    label: "エージェントフィルター",
    help: "これらのエージェントIDの承認のみを転送",
  },
  "channels.discord.execApprovals.sessionFilter": {
    label: "セッションフィルター",
    help: "これらのセッションキーパターンに一致する承認のみを転送",
  },
  "channels.discord.groupPolicy": {
    label: "グループポリシー",
    help: "ギルドチャンネルメッセージの処理方法（open/disabled/allowlist）",
  },
  "channels.discord.guilds": {
    label: "ギルド",
    help: "ギルドIDまたはスラッグ別の設定",
  },
  "channels.discord.heartbeat": {
    label: "ハートビート",
    help: "このチャンネルのハートビート可視性設定",
  },
  "channels.discord.historyLimit": {
    label: "履歴制限",
    help: "履歴コンテキストとして保持する最大メッセージ数",
  },
  "channels.discord.intents": {
    label: "インテント",
    help: "特権ゲートウェイインテント（Developer Portalでも有効化が必要）",
  },
  "channels.discord.intents.presence": {
    label: "プレゼンス",
    help: "Guild Presences特権インテントを有効にする",
  },
  "channels.discord.intents.guildMembers": {
    label: "ギルドメンバー",
    help: "Guild Members特権インテントを有効にする",
  },
  "channels.discord.markdown": {
    label: "マークダウン",
    help: "マークダウンフォーマット設定",
  },
  "channels.discord.markdown.tables": {
    label: "テーブル",
    help: "テーブルレンダリングモード（off/bullets/code）",
  },
  "channels.discord.maxLinesPerMessage": {
    label: "メッセージあたり最大行数",
    help: "Discordメッセージあたりのソフト最大行数（デフォルト: 17）",
  },
  "channels.discord.mediaMaxMb": {
    label: "メディア最大サイズ（MB）",
    help: "メディアファイルの最大サイズ（メガバイト）",
  },
  "channels.discord.name": {
    label: "名前",
    help: "このアカウントの表示名（CLI/UIリストで使用）",
  },
  "channels.discord.replyToMode": {
    label: "返信モード",
    help: "返信タグがある場合の返信スレッド制御（off/first/all）",
  },
  "channels.discord.retry": {
    label: "リトライ",
    help: "送信Discord APIコールのリトライポリシー",
  },
  "channels.discord.retry.attempts": {
    label: "試行回数",
    help: "最大リトライ試行回数（デフォルト: 3）",
  },
  "channels.discord.retry.minDelayMs": {
    label: "最小遅延（ミリ秒）",
    help: "最小リトライ遅延（ミリ秒）",
  },
  "channels.discord.retry.maxDelayMs": {
    label: "最大遅延（ミリ秒）",
    help: "最大リトライ遅延上限（ミリ秒）",
  },
  "channels.discord.retry.jitter": {
    label: "ジッター",
    help: "遅延に適用されるジッター係数（0-1）",
  },
  "channels.discord.textChunkLimit": {
    label: "テキストチャンク制限",
    help: "送信テキストのチャンクサイズ（文字数、デフォルト: 2000）",
  },
  "channels.discord.scopes": {
    label: "スコープ",
  },
  "channels.discord.scopes.channelInfo": {
    label: "チャンネル情報",
    help: "チャンネル情報の取得を許可",
  },
  "channels.discord.scopes.channels": {
    label: "チャンネル",
    help: "チャンネルへのアクセスを許可",
  },
  "channels.discord.scopes.emojiUploads": {
    label: "絵文字アップロード",
    help: "絵文字のアップロードを許可",
  },
  "channels.discord.scopes.events": {
    label: "イベント",
    help: "イベントへのアクセスを許可",
  },
  "channels.discord.scopes.memberInfo": {
    label: "メンバー情報",
    help: "メンバー情報の取得を許可",
  },
  "channels.discord.scopes.messages": {
    label: "メッセージ",
    help: "メッセージの読み書きを許可",
  },
  "channels.slack": {
    label: "Slack",
  },
  "channels.slack.appToken": {
    label: "アプリトークン",
  },
  "channels.slack.botToken": {
    label: "Botトークン",
  },
  "channels.slack.userToken": {
    label: "ユーザートークン",
  },
  "channels.slack.userTokenReadOnly": {
    label: "ユーザートークン（読み取り専用）",
  },
  "channels.slack.enabled": {
    label: "有効",
  },
  "channels.slack.accounts": {
    label: "アカウント",
  },
  "channels.slack.name": {
    label: "名前",
  },
  "channels.slack.mode": {
    label: "モード",
    help: "Slack接続モード（socket/http）",
  },
  "channels.slack.capabilities": {
    label: "機能タグ",
  },
  "channels.slack.commands": {
    label: "コマンド",
  },
  "channels.slack.commands.native": {
    label: "ネイティブ",
  },
  "channels.slack.commands.nativeSkills": {
    label: "ネイティブスキル",
  },
  "channels.slack.allowBots": {
    label: "ボットを許可",
  },
  "channels.slack.requireMention": {
    label: "メンション必須",
  },
  "channels.slack.groupPolicy": {
    label: "グループポリシー",
  },
  "channels.slack.historyLimit": {
    label: "履歴制限",
  },
  "channels.slack.dmHistoryLimit": {
    label: "DM履歴制限",
  },
  "channels.slack.textChunkLimit": {
    label: "テキストチャンク制限",
  },
  "channels.slack.chunkMode": {
    label: "チャンクモード",
  },
  "channels.slack.blockStreaming": {
    label: "ブロックストリーミング",
  },
  "channels.slack.blockStreamingCoalesce": {
    label: "ブロックストリーミング結合",
  },
  "channels.slack.blockStreamingCoalesce.idleMs": {
    label: "アイドル時間（ミリ秒）",
  },
  "channels.slack.blockStreamingCoalesce.maxChars": {
    label: "最大文字数",
  },
  "channels.slack.blockStreamingCoalesce.minChars": {
    label: "最小文字数",
  },
  "channels.slack.mediaMaxMb": {
    label: "メディア最大サイズ（MB）",
  },
  "channels.slack.actions": {
    label: "アクション",
  },
  "channels.slack.actions.reactions": {
    label: "リアクション",
  },
  "channels.slack.actions.messages": {
    label: "メッセージ",
  },
  "channels.slack.actions.pins": {
    label: "ピン",
  },
  "channels.slack.actions.search": {
    label: "検索",
  },
  "channels.slack.actions.permissions": {
    label: "権限",
  },
  "channels.slack.actions.memberInfo": {
    label: "メンバー情報",
  },
  "channels.slack.actions.channelInfo": {
    label: "チャンネル情報",
  },
  "channels.slack.actions.emojiList": {
    label: "絵文字リスト",
  },
  "channels.slack.reactionNotifications": {
    label: "リアクション通知",
  },
  "channels.slack.replyToMode": {
    label: "返信モード",
  },
  "channels.slack.dm": {
    label: "ダイレクトメッセージ",
  },
  "channels.slack.dm.enabled": {
    label: "有効",
  },
  "channels.slack.dm.policy": {
    label: "ポリシー",
  },
  "channels.slack.dm.groupEnabled": {
    label: "グループDM有効",
  },
  "channels.slack.channels": {
    label: "チャンネル",
  },
  "channels.slack.slashCommand": {
    label: "スラッシュコマンド",
  },
  "channels.slack.slashCommand.enabled": {
    label: "有効",
  },
  "channels.slack.slashCommand.name": {
    label: "名前",
  },
  "channels.slack.thread": {
    label: "スレッド",
  },
  "channels.slack.thread.historyScope": {
    label: "履歴スコープ",
  },
  "channels.slack.thread.inheritParent": {
    label: "親を継承",
  },
  "channels.whatsapp": {
    label: "WhatsApp",
  },
  "channels.whatsapp.enabled": {
    label: "有効",
  },
  "channels.whatsapp.dmPolicy": {
    label: "WhatsApp DMポリシー",
    help: "ダイレクトメッセージアクセス制御（\"pairing\"推奨）。\"open\"にはchannels.whatsapp.allowFrom=[\"*\"]が必要",
  },
  "channels.whatsapp.selfChatMode": {
    label: "WhatsApp自己電話モード",
    help: "同一電話セットアップ（ボットが個人のWhatsApp番号を使用）",
  },
  "channels.whatsapp.debounceMs": {
    label: "WhatsAppメッセージデバウンス（ミリ秒）",
    help: "同じ送信者からの連続メッセージをバッチ処理するデバウンスウィンドウ（ミリ秒、0で無効）",
  },
  "channels.signal": {
    label: "Signal",
  },
  "channels.signal.enabled": {
    label: "有効",
  },
  "channels.signal.baseUrl": {
    label: "ベースURL",
  },
  "channels.signal.account": {
    label: "Signalアカウント",
    help: "Signalアカウント設定",
  },
  "channels.signal.dmPolicy": {
    label: "Signal DMポリシー",
    help: "ダイレクトメッセージアクセス制御（\"pairing\"推奨）。\"open\"にはchannels.signal.allowFrom=[\"*\"]が必要",
  },
  "channels.nostr": {
    label: "Nostr",
  },
  "channels.nostr.enabled": {
    label: "有効",
  },
  "channels.nostr.relays": {
    label: "リレー",
    help: "接続するNostrリレーのURL一覧",
  },
  "channels.imessage": {
    label: "iMessage",
  },
  "channels.imessage.enabled": {
    label: "有効",
  },
  "channels.imessage.dmPolicy": {
    label: "iMessage DMポリシー",
    help: "ダイレクトメッセージアクセス制御（\"pairing\"推奨）。\"open\"にはchannels.imessage.allowFrom=[\"*\"]が必要",
  },
  "channels.imessage.cliPath": {
    label: "iMessage CLIパス",
    help: "iMessage CLIのパス",
  },
  "channels.bluebubbles": {
    label: "BlueBubbles",
  },
  "channels.bluebubbles.enabled": {
    label: "有効",
  },
  "channels.bluebubbles.dmPolicy": {
    label: "BlueBubbles DMポリシー",
    help: "ダイレクトメッセージアクセス制御（\"pairing\"推奨）。\"open\"にはchannels.bluebubbles.allowFrom=[\"*\"]が必要",
  },
  "channels.mattermost": {
    label: "Mattermost",
  },
  "channels.mattermost.enabled": {
    label: "有効",
  },
  "channels.mattermost.botToken": {
    label: "Mattermostボットトークン",
    help: "Mattermostシステムコンソール -> 統合 -> ボットアカウントからのボットトークン",
  },
  "channels.mattermost.baseUrl": {
    label: "MattermostベースURL",
    help: "Mattermostサーバーのベース URL（例: https://chat.example.com）",
  },
  "channels.mattermost.chatmode": {
    label: "Mattermostチャットモード",
    help: "メンション時に返信（\"oncall\"）、トリガー文字時に返信（\">\"または\"!\"）（\"onchar\"）、全メッセージに返信（\"onmessage\"）",
  },
  "channels.mattermost.oncharPrefixes": {
    label: "Mattermost oncharプレフィックス",
    help: "oncharモードのトリガープレフィックス（デフォルト: [\">\", \"!\"]）",
  },
  "channels.mattermost.requireMention": {
    label: "Mattermostメンション必須",
    help: "返信前にチャンネルで@メンションを要求（デフォルト: true）",
  },
  "channels.msteams": {
    label: "MS Teams",
  },
  "channels.msteams.enabled": {
    label: "有効",
  },
  "channels.googlechat": {
    label: "Google Chat",
  },
  "channels.googlechat.enabled": {
    label: "有効",
  },

  // ========================================
  // Tools section
  // ========================================
  "tools": {
    label: "ツール",
  },
  "tools.agentToAgent": {
    label: "エージェント間通信",
  },
  "tools.agentToAgent.allow": {
    label: "許可",
  },
  "tools.agentToAgent.enabled": {
    label: "有効",
    help: "エージェント間通信を有効にする",
  },
  "tools.allow": {
    label: "許可",
  },
  "tools.deny": {
    label: "拒否",
  },
  "tools.elevated": {
    label: "昇格権限",
    help: "昇格権限ツールの設定",
  },
  "tools.profile": {
    label: "ツールプロファイル",
    help: "使用するツールプロファイル",
  },
  "tools.alsoAllow": {
    label: "ツール許可リスト追加",
    help: "追加で許可するツール",
  },
  "tools.byProvider": {
    label: "プロバイダー別ツールポリシー",
    help: "プロバイダー別のツールポリシー設定",
  },
  "tools.browser": {
    label: "ブラウザ",
  },
  "tools.browser.enabled": {
    label: "有効",
  },
  "tools.browser.headless": {
    label: "ヘッドレス",
    help: "ヘッドレスモードで実行する",
  },
  "tools.search": {
    label: "検索",
  },
  "tools.search.enabled": {
    label: "有効",
  },
  "tools.exec": {
    label: "コマンド実行",
  },
  "tools.exec.enabled": {
    label: "有効",
  },
  "tools.exec.node": {
    label: "ノードバインディング",
    help: "コマンド実行用のデフォルトノード",
  },
  "tools.exec.applyPatch": {
    label: "apply_patch",
  },
  "tools.exec.applyPatch.enabled": {
    label: "apply_patch有効",
    help: "実験的。ツールポリシーで許可されている場合、OpenAIモデルでapply_patchを有効にする",
  },
  "tools.exec.applyPatch.allowModels": {
    label: "apply_patchモデル許可リスト",
    help: "オプションのモデルID許可リスト（例: \"gpt-5.2\"または\"openai/gpt-5.2\"）",
  },
  "tools.exec.notifyOnExit": {
    label: "終了時通知",
    help: "trueの場合（デフォルト）、バックグラウンド実行セッションは終了時にシステムイベントをキューに入れ、ハートビートを要求する",
  },
  "tools.exec.approvalRunningNoticeMs": {
    label: "実行承認通知（ミリ秒）",
    help: "実行承認の実行中通知の時間（ミリ秒）",
  },
  "tools.exec.host": {
    label: "実行ホスト",
    help: "実行ホスト",
  },
  "tools.exec.security": {
    label: "実行セキュリティ",
    help: "実行セキュリティ設定",
  },
  "tools.exec.ask": {
    label: "実行確認",
    help: "実行確認設定",
  },
  "tools.exec.pathPrepend": {
    label: "実行PATH先頭追加",
    help: "実行時にPATHの先頭に追加するディレクトリ（ゲートウェイ/サンドボックス）",
  },
  "tools.exec.safeBins": {
    label: "実行安全バイナリ",
    help: "明示的な許可リストエントリなしでstdin専用の安全なバイナリの実行を許可",
  },
  "tools.media": {
    label: "メディア理解",
  },
  "tools.media.models": {
    label: "メディア理解共有モデル",
    help: "メディア理解で共有するモデル",
  },
  "tools.media.concurrency": {
    label: "メディア理解同時実行数",
    help: "メディア理解の同時実行数",
  },
  "tools.media.image": {
    label: "画像理解",
  },
  "tools.media.image.enabled": {
    label: "画像理解有効",
    help: "画像理解を有効にする",
  },
  "tools.media.image.maxBytes": {
    label: "画像理解最大バイト数",
    help: "画像理解の最大バイト数",
  },
  "tools.media.image.maxChars": {
    label: "画像理解最大文字数",
    help: "画像理解の最大文字数",
  },
  "tools.media.image.prompt": {
    label: "画像理解プロンプト",
    help: "画像理解用のプロンプト",
  },
  "tools.media.image.timeoutSeconds": {
    label: "画像理解タイムアウト（秒）",
    help: "画像理解のタイムアウト（秒）",
  },
  "tools.media.image.attachments": {
    label: "画像理解添付ポリシー",
    help: "画像理解の添付ポリシー",
  },
  "tools.media.image.models": {
    label: "画像理解モデル",
    help: "画像理解で使用するモデル",
  },
  "tools.media.image.scope": {
    label: "画像理解スコープ",
    help: "画像理解のスコープ",
  },
  "tools.media.audio": {
    label: "音声理解",
  },
  "tools.media.audio.enabled": {
    label: "音声理解有効",
    help: "音声理解を有効にする",
  },
  "tools.media.audio.maxBytes": {
    label: "音声理解最大バイト数",
    help: "音声理解の最大バイト数",
  },
  "tools.media.audio.maxChars": {
    label: "音声理解最大文字数",
    help: "音声理解の最大文字数",
  },
  "tools.media.audio.prompt": {
    label: "音声理解プロンプト",
    help: "音声理解用のプロンプト",
  },
  "tools.media.audio.timeoutSeconds": {
    label: "音声理解タイムアウト（秒）",
    help: "音声理解のタイムアウト（秒）",
  },
  "tools.media.audio.language": {
    label: "音声理解言語",
    help: "音声理解の言語",
  },
  "tools.media.audio.attachments": {
    label: "音声理解添付ポリシー",
    help: "音声理解の添付ポリシー",
  },
  "tools.media.audio.models": {
    label: "音声理解モデル",
    help: "音声理解で使用するモデル",
  },
  "tools.media.audio.scope": {
    label: "音声理解スコープ",
    help: "音声理解のスコープ",
  },
  "tools.media.video": {
    label: "動画理解",
  },
  "tools.media.video.enabled": {
    label: "動画理解有効",
    help: "動画理解を有効にする",
  },
  "tools.media.video.maxBytes": {
    label: "動画理解最大バイト数",
    help: "動画理解の最大バイト数",
  },
  "tools.media.video.maxChars": {
    label: "動画理解最大文字数",
    help: "動画理解の最大文字数",
  },
  "tools.media.video.prompt": {
    label: "動画理解プロンプト",
    help: "動画理解用のプロンプト",
  },
  "tools.media.video.timeoutSeconds": {
    label: "動画理解タイムアウト（秒）",
    help: "動画理解のタイムアウト（秒）",
  },
  "tools.media.video.attachments": {
    label: "動画理解添付ポリシー",
    help: "動画理解の添付ポリシー",
  },
  "tools.media.video.models": {
    label: "動画理解モデル",
    help: "動画理解で使用するモデル",
  },
  "tools.media.video.scope": {
    label: "動画理解スコープ",
    help: "動画理解のスコープ",
  },
  "tools.links": {
    label: "リンク理解",
  },
  "tools.links.enabled": {
    label: "リンク理解有効",
    help: "リンク理解を有効にする",
  },
  "tools.links.maxLinks": {
    label: "リンク理解最大リンク数",
    help: "リンク理解の最大リンク数",
  },
  "tools.links.timeoutSeconds": {
    label: "リンク理解タイムアウト（秒）",
    help: "リンク理解のタイムアウト（秒）",
  },
  "tools.links.models": {
    label: "リンク理解モデル",
    help: "リンク理解で使用するモデル",
  },
  "tools.links.scope": {
    label: "リンク理解スコープ",
    help: "リンク理解のスコープ",
  },
  "tools.message": {
    label: "メッセージ",
  },
  "tools.message.allowCrossContextSend": {
    label: "クロスコンテキスト送信許可",
    help: "レガシーオーバーライド: すべてのプロバイダー間でクロスコンテキスト送信を許可",
  },
  "tools.message.crossContext": {
    label: "クロスコンテキスト",
  },
  "tools.message.crossContext.allowWithinProvider": {
    label: "同一プロバイダー内クロスコンテキスト許可",
    help: "同じプロバイダー内の他のチャンネルへの送信を許可（デフォルト: true）",
  },
  "tools.message.crossContext.allowAcrossProviders": {
    label: "プロバイダー間クロスコンテキスト許可",
    help: "異なるプロバイダー間での送信を許可（デフォルト: false）",
  },
  "tools.message.crossContext.marker": {
    label: "クロスコンテキストマーカー",
  },
  "tools.message.crossContext.marker.enabled": {
    label: "クロスコンテキストマーカー有効",
    help: "クロスコンテキスト送信時に可視マーカーを追加（デフォルト: true）",
  },
  "tools.message.crossContext.marker.prefix": {
    label: "クロスコンテキストマーカープレフィックス",
    help: "クロスコンテキストマーカーのテキストプレフィックス（\"{channel}\"をサポート）",
  },
  "tools.message.crossContext.marker.suffix": {
    label: "クロスコンテキストマーカーサフィックス",
    help: "クロスコンテキストマーカーのテキストサフィックス（\"{channel}\"をサポート）",
  },
  "tools.message.broadcast": {
    label: "ブロードキャスト",
  },
  "tools.message.broadcast.enabled": {
    label: "メッセージブロードキャスト有効",
    help: "ブロードキャストアクションを有効にする（デフォルト: true）",
  },
  "tools.web": {
    label: "Web",
  },
  "tools.web.search": {
    label: "Web検索",
  },
  "tools.web.search.enabled": {
    label: "Web検索ツール有効",
    help: "web_searchツールを有効にする（プロバイダーAPIキーが必要）",
  },
  "tools.web.search.provider": {
    label: "Web検索プロバイダー",
    help: "検索プロバイダー（\"brave\"または\"perplexity\"）",
  },
  "tools.web.search.apiKey": {
    label: "Brave Search APIキー",
    help: "Brave Search APIキー（フォールバック: BRAVE_API_KEY環境変数）",
  },
  "tools.web.search.maxResults": {
    label: "Web検索最大結果数",
    help: "返す結果のデフォルト数（1-10）",
  },
  "tools.web.search.timeoutSeconds": {
    label: "Web検索タイムアウト（秒）",
    help: "web_searchリクエストのタイムアウト（秒）",
  },
  "tools.web.search.cacheTtlMinutes": {
    label: "Web検索キャッシュTTL（分）",
    help: "web_search結果のキャッシュTTL（分）",
  },
  "tools.web.search.perplexity": {
    label: "Perplexity設定",
  },
  "tools.web.search.perplexity.apiKey": {
    label: "Perplexity APIキー",
    help: "PerplexityまたはOpenRouter APIキー（フォールバック: PERPLEXITY_API_KEYまたはOPENROUTER_API_KEY環境変数）",
  },
  "tools.web.search.perplexity.baseUrl": {
    label: "Perplexity基本URL",
    help: "Perplexity基本URLのオーバーライド（デフォルト: https://openrouter.ai/api/v1 または https://api.perplexity.ai）",
  },
  "tools.web.search.perplexity.model": {
    label: "Perplexityモデル",
    help: "Perplexityモデルのオーバーライド（デフォルト: \"perplexity/sonar-pro\"）",
  },
  "tools.web.fetch": {
    label: "Webフェッチ",
  },
  "tools.web.fetch.enabled": {
    label: "Webフェッチツール有効",
    help: "web_fetchツール（軽量HTTPフェッチ）を有効にする",
  },
  "tools.web.fetch.maxChars": {
    label: "Webフェッチ最大文字数",
    help: "web_fetchが返す最大文字数（切り詰め）",
  },
  "tools.web.fetch.timeoutSeconds": {
    label: "Webフェッチタイムアウト（秒）",
    help: "web_fetchリクエストのタイムアウト（秒）",
  },
  "tools.web.fetch.cacheTtlMinutes": {
    label: "Webフェッチキャッシュ TTL（分）",
    help: "web_fetch結果のキャッシュTTL（分）",
  },
  "tools.web.fetch.maxRedirects": {
    label: "Webフェッチ最大リダイレクト数",
    help: "web_fetchで許可される最大リダイレクト数（デフォルト: 3）",
  },
  "tools.web.fetch.userAgent": {
    label: "WebフェッチUser-Agent",
    help: "web_fetchリクエストのUser-Agentヘッダーを上書き",
  },

  // ========================================
  // Skills section
  // ========================================
  "skills.packs": {
    label: "スキルパック",
  },
  "skills.allowlist": {
    label: "許可リスト",
  },
  "skills.blocklist": {
    label: "ブロックリスト",
  },
  "skills.allowBundled": {
    label: "バンドル許可",
    help: "バンドルされたスキルを許可する",
  },
  "skills.entries": {
    label: "エントリ",
    help: "スキルエントリの設定",
  },
  "skills.install": {
    label: "インストール",
    help: "スキルのインストール設定",
  },
  "skills.load": {
    label: "スキル読み込み",
  },
  "skills.load.watch": {
    label: "スキル監視",
    help: "スキルファイルの変更を監視する",
  },
  "skills.load.watchDebounceMs": {
    label: "スキル監視デバウンス（ミリ秒）",
    help: "スキル監視のデバウンス時間（ミリ秒）",
  },

  // ========================================
  // Session section
  // ========================================
  session: {
    label: "セッション",
  },
  "session.persistence": {
    label: "永続化",
    help: "セッション永続化を有効にする",
  },
  "session.ttl": {
    label: "TTL",
    help: "セッションの有効期限（秒）",
  },
  "session.scope": {
    label: "スコープ",
    help: "セッションスコープ: per-sender（送信者ごと）またはglobal（グローバル）",
  },
  "session.dmScope": {
    label: "DMセッションスコープ",
    help: "DMセッションスコーピング: \"main\"で継続性を維持、\"per-peer\"、\"per-channel-peer\"、\"per-account-channel-peer\"でDM履歴を分離（共有インボックス/マルチアカウントに推奨）",
  },
  "session.identityLinks": {
    label: "アイデンティティリンク",
    help: "DMセッションリンク用にカノニカルアイデンティティをプロバイダープレフィックス付きピアIDにマップ（例: telegram:123456）",
  },
  "session.resetTriggers": {
    label: "リセットトリガー",
    help: "セッションをリセットするトリガーワード",
  },
  "session.idleMinutes": {
    label: "アイドル時間（分）",
    help: "アイドル状態でのセッションリセットまでの時間（分）",
  },
  "session.reset": {
    label: "リセット設定",
  },
  "session.reset.mode": {
    label: "モード",
    help: "リセットモード: daily（毎日）またはidle（アイドル時）",
  },
  "session.reset.atHour": {
    label: "リセット時刻",
    help: "dailyモードでのリセット時刻（0-23時）",
  },
  "session.reset.idleMinutes": {
    label: "アイドル時間（分）",
    help: "idleモードでのリセットまでのアイドル時間（分）",
  },
  "session.resetByType": {
    label: "タイプ別リセット",
  },
  "session.resetByType.dm": {
    label: "DM",
    help: "DMセッションのリセット設定",
  },
  "session.resetByType.group": {
    label: "グループ",
    help: "グループセッションのリセット設定",
  },
  "session.resetByType.thread": {
    label: "スレッド",
    help: "スレッドセッションのリセット設定",
  },
  "session.resetByChannel": {
    label: "チャンネル別リセット",
    help: "チャンネルごとのリセット設定",
  },
  "session.store": {
    label: "ストア",
    help: "セッションストアの設定",
  },
  "session.typingIntervalSeconds": {
    label: "タイピング間隔（秒）",
    help: "タイピングインジケーターの更新間隔（秒）",
  },
  "session.typingMode": {
    label: "タイピングモード",
    help: "タイピングインジケーターの表示モード: never、instant、thinking、message",
  },
  "session.mainKey": {
    label: "メインキー",
    help: "セッションのメインキー",
  },
  "session.sendPolicy": {
    label: "送信ポリシー",
  },
  "session.sendPolicy.default": {
    label: "デフォルト",
    help: "デフォルトの送信ポリシー: allowまたはdeny",
  },
  "session.sendPolicy.rules": {
    label: "ルール",
    help: "送信ポリシーのルール一覧",
  },
  "session.agentToAgent": {
    label: "エージェント間",
  },
  "session.agentToAgent.maxPingPongTurns": {
    label: "エージェント間ピンポンターン数",
    help: "リクエスターとターゲット間の最大返信ターン数（0-5）",
  },

  // ========================================
  // Cron section
  // ========================================
  cron: {
    label: "Cron",
  },
  "cron.enabled": {
    label: "有効",
    help: "Cronスケジューラを有効にする",
  },
  "cron.store": {
    label: "ストア",
    help: "Cronジョブのストア設定",
  },
  "cron.maxConcurrentRuns": {
    label: "最大同時実行数",
    help: "同時に実行できるCronジョブの最大数",
  },
  "cron.jobs": {
    label: "ジョブ一覧",
  },

  // ========================================
  // Web section
  // ========================================
  "web.port": {
    label: "ポート",
  },
  "web.host": {
    label: "ホスト",
  },
  "web.cors": {
    label: "CORS",
  },

  // ========================================
  // Discovery section
  // ========================================
  discovery: {
    label: "ディスカバリ",
  },
  "discovery.enabled": {
    label: "有効",
  },
  "discovery.wideArea": {
    label: "広域ディスカバリ",
  },
  "discovery.wideArea.enabled": {
    label: "有効",
    help: "広域ディスカバリを有効にする",
  },
  "discovery.wideArea.domain": {
    label: "ドメイン",
    help: "広域ディスカバリのドメイン",
  },
  "discovery.mdns": {
    label: "mDNS",
  },
  "discovery.mdns.mode": {
    label: "mDNS検出モード",
    help: "mDNSブロードキャストモード（\"minimal\"デフォルト、\"full\"はcliPath/sshPortを含む、\"off\"で無効）",
  },

  // ========================================
  // Auth section
  // ========================================
  "auth.profiles": {
    label: "認証プロファイル",
    help: "名前付き認証プロファイル（プロバイダー + モード + オプションのメール）",
  },
  "auth.profiles.*.name": {
    label: "プロファイル名",
  },
  "auth.profiles.*.email": {
    label: "メールアドレス",
    help: "認証に使用するメールアドレス（オプション）",
  },
  "auth.profiles.*.mode": {
    label: "モード",
    help: "認証モード（api_key、oauth、token）",
  },
  "auth.profiles.*.provider": {
    label: "プロバイダー",
    help: "認証プロバイダー",
  },
  "auth.profiles.*.apiKey": {
    label: "APIキー",
  },
  "auth.order": {
    label: "認証プロファイル順序",
    help: "プロバイダー別の順序付き認証プロファイルID（自動フェイルオーバーに使用）",
  },
  "auth.cooldowns": {
    label: "クールダウン",
  },
  "auth.cooldowns.billingBackoffHours": {
    label: "課金バックオフ（時間）",
    help: "課金/クレジット不足でプロファイルが失敗した際の基本バックオフ時間（デフォルト: 5）",
  },
  "auth.cooldowns.billingBackoffHoursByProvider": {
    label: "課金バックオフオーバーライド",
    help: "プロバイダー別の課金バックオフ時間のオプションオーバーライド",
  },
  "auth.cooldowns.billingMaxHours": {
    label: "課金バックオフ上限（時間）",
    help: "課金バックオフの上限時間（デフォルト: 24）",
  },
  "auth.cooldowns.failureWindowHours": {
    label: "フェイルオーバーウィンドウ（時間）",
    help: "バックオフカウンターの失敗ウィンドウ時間（デフォルト: 24）",
  },

  // ========================================
  // Models section
  // ========================================
  "models.providers": {
    label: "プロバイダー",
  },
  "models.default": {
    label: "デフォルトモデル",
  },

  // ========================================
  // Approvals section
  // ========================================
  approvals: {
    label: "承認",
  },
  "approvals.exec": {
    label: "実行承認転送",
    help: "ツール実行承認の転送設定",
  },
  "approvals.exec.enabled": {
    label: "有効",
    help: "承認転送を有効にする",
  },
  "approvals.exec.mode": {
    label: "モード",
    help: "転送モード: session（セッション）、targets（ターゲット）、both（両方）",
  },
  "approvals.exec.agentFilter": {
    label: "エージェントフィルター",
    help: "承認を転送するエージェントのフィルター",
  },
  "approvals.exec.sessionFilter": {
    label: "セッションフィルター",
    help: "承認を転送するセッションのフィルター",
  },
  "approvals.exec.targets": {
    label: "ターゲット",
    help: "承認転送先のターゲット一覧",
  },

  // ========================================
  // Messages section
  // ========================================
  "messages": {
    label: "メッセージ",
    help: "メッセージ処理とルーティング設定",
  },
  "messages.routing": {
    label: "ルーティング",
  },
  "messages.history": {
    label: "履歴",
  },
  "messages.history.maxItems": {
    label: "最大アイテム数",
  },
  "messages.ackReaction": {
    label: "確認リアクション絵文字",
    help: "受信メッセージ確認に使用する絵文字リアクション（空で無効）",
  },
  "messages.ackReactionEmoji": {
    label: "確認リアクション絵文字",
    help: "受信メッセージの確認に使用するリアクション絵文字（空欄で無効）",
  },
  "messages.ackReactionScope": {
    label: "確認リアクションスコープ",
    help: "確認リアクションの送信タイミング（\"group-mentions\"、\"group-all\"、\"direct\"、\"all\"）",
  },
  "messages.inbound.debounceMs": {
    label: "受信メッセージデバウンス（ミリ秒）",
    help: "同じ送信者からの連続受信メッセージをバッチ処理するデバウンスウィンドウ（ミリ秒、0で無効）",
  },
  "messages.groupChat": {
    label: "グループチャット",
    help: "グループチャット設定",
  },
  "messages.groupChat.historyLimit": {
    label: "履歴制限",
    help: "グループチャットの履歴制限数",
  },
  "messages.groupChat.mentionPatterns": {
    label: "メンションパターン",
    help: "ボットへのメンションとして認識するパターン",
  },
  "messages.inbound": {
    label: "受信",
    help: "受信メッセージ設定",
  },
  "messages.inbound.byChannel": {
    label: "チャンネル別設定",
    help: "チャンネルごとの受信設定",
  },
  "messages.messagePrefix": {
    label: "メッセージプレフィックス",
    help: "メッセージのプレフィックス設定",
  },
  "messages.queue": {
    label: "キュー",
    help: "メッセージキュー設定",
  },
  "messages.queue.byChannel": {
    label: "チャンネル別設定",
    help: "チャンネルごとのキュー設定",
  },
  "messages.queue.cap": {
    label: "上限",
    help: "キューの最大メッセージ数",
  },
  "messages.queue.debounceMs": {
    label: "デバウンス（ミリ秒）",
    help: "キューのデバウンス時間（ミリ秒）",
  },
  "messages.queue.debounceMsByChannel": {
    label: "チャンネル別デバウンス",
    help: "チャンネルごとのデバウンス設定",
  },
  "messages.queue.drop": {
    label: "ドロップ",
    help: "キュー上限時のドロップ動作",
  },
  "messages.queue.mode": {
    label: "モード",
    help: "キューの動作モード",
  },
  "messages.removeAckAfterReply": {
    label: "返信後に確認を削除",
    help: "返信後にリアクションを削除するかどうか",
  },
  "messages.responsePrefix": {
    label: "応答プレフィックス",
    help: "応答メッセージのプレフィックス",
  },
  "messages.tts": {
    label: "TTS（テキスト読み上げ）",
    help: "テキスト読み上げ設定",
  },
  "messages.tts.enabled": {
    label: "有効",
    help: "TTS機能を有効にする",
  },
  "messages.tts.auto": {
    label: "自動TTS",
    help: "自動TTS設定",
  },
  "messages.tts.mode": {
    label: "モード",
    help: "TTSモード",
  },
  "messages.tts.provider": {
    label: "プロバイダー",
    help: "TTSプロバイダー",
  },
  "messages.tts.summaryModel": {
    label: "要約モデル",
    help: "TTS要約に使用するモデル",
  },
  "messages.tts.modelOverrides": {
    label: "モデルオーバーライド",
    help: "TTSモデルのオーバーライド設定",
  },
  "messages.tts.modelOverrides.enabled": {
    label: "有効",
    help: "モデルオーバーライドを有効にする",
  },
  "messages.tts.modelOverrides.allowText": {
    label: "テキスト許可",
    help: "テキストオーバーライドを許可",
  },
  "messages.tts.modelOverrides.allowProvider": {
    label: "プロバイダー許可",
    help: "プロバイダーオーバーライドを許可",
  },
  "messages.tts.modelOverrides.allowVoice": {
    label: "音声許可",
    help: "音声オーバーライドを許可",
  },
  "messages.tts.modelOverrides.allowModelId": {
    label: "モデルID許可",
    help: "モデルIDオーバーライドを許可",
  },
  "messages.tts.modelOverrides.allowVoiceSettings": {
    label: "音声設定許可",
    help: "音声設定オーバーライドを許可",
  },
  "messages.tts.modelOverrides.allowNormalization": {
    label: "正規化許可",
    help: "正規化オーバーライドを許可",
  },
  "messages.tts.modelOverrides.allowSeed": {
    label: "シード許可",
    help: "シードオーバーライドを許可",
  },
  // Alternative paths for TTS allow settings
  "messages.tts.allowModelId": {
    label: "モデルID許可",
    help: "モデルIDオーバーライドを許可",
  },
  "messages.tts.allowNormalization": {
    label: "正規化許可",
    help: "正規化オーバーライドを許可",
  },
  "messages.tts.allowProvider": {
    label: "プロバイダー許可",
    help: "プロバイダーオーバーライドを許可",
  },
  "messages.tts.allowSeed": {
    label: "シード許可",
    help: "シードオーバーライドを許可",
  },
  "messages.tts.allowText": {
    label: "テキスト許可",
    help: "テキストオーバーライドを許可",
  },
  "messages.tts.allowVoice": {
    label: "音声許可",
    help: "音声オーバーライドを許可",
  },
  "messages.tts.allowVoiceSettings": {
    label: "音声設定許可",
    help: "音声設定オーバーライドを許可",
  },

  // ========================================
  // Hooks section
  // ========================================
  hooks: {
    label: "フック",
  },
  "hooks.enabled": {
    label: "有効",
    help: "Webhookを有効にする",
  },
  "hooks.path": {
    label: "パス",
    help: "Webhookのエンドポイントパス",
  },
  "hooks.token": {
    label: "トークン",
    help: "Webhook認証トークン",
  },
  "hooks.maxBodyBytes": {
    label: "最大ボディサイズ",
    help: "リクエストボディの最大バイト数",
  },
  "hooks.presets": {
    label: "プリセット",
    help: "使用するプリセットのリスト",
  },
  "hooks.transformsDir": {
    label: "変換ディレクトリ",
    help: "カスタム変換ファイルのディレクトリ",
  },
  "hooks.mappings": {
    label: "マッピング",
    help: "Webhookマッピングの設定",
  },
  "hooks.gmail": {
    label: "Gmail",
    help: "Gmailフックの設定",
  },
  "hooks.internal": {
    label: "内部フック",
    help: "内部フックの設定",
  },
  "hooks.internal.enabled": {
    label: "内部フック有効",
    help: "内部フックを有効にする",
  },
  "hooks.internal.handlers": {
    label: "ハンドラー",
    help: "内部フックハンドラーのリスト",
  },
  "hooks.internal.entries": {
    label: "プラグインエントリ",
    help: "プラグインID別の設定（有効/無効・設定ペイロード）",
  },
  "hooks.internal.entries.enabled": {
    label: "プラグイン有効",
    help: "このプラグインを有効にする",
  },
  "hooks.internal.entries.env": {
    label: "環境変数",
    help: "プラグイン用の環境変数",
  },
  "hooks.internal.load": {
    label: "読み込み設定",
    help: "プラグインの読み込み設定",
  },
  "hooks.internal.load.extraDirs": {
    label: "追加ディレクトリ",
    help: "追加のプラグインディレクトリ",
  },
  "hooks.internal.installs": {
    label: "インストール記録",
    help: "インストール済みプラグインの記録",
  },
  "hooks.webhooks": {
    label: "Webhook一覧",
  },
  "hooks.events": {
    label: "イベント一覧",
  },

  // ========================================
  // Commands section
  // ========================================
  commands: {
    label: "コマンド",
  },
  "commands.custom": {
    label: "カスタムコマンド",
  },
  "commands.native": {
    label: "ネイティブコマンド",
    help: "ネイティブコマンドをサポートするチャンネル（Discord/Slack/Telegram）に登録",
  },
  "commands.nativeSkills": {
    label: "ネイティブスキルコマンド",
    help: "ネイティブスキルコマンド（ユーザー呼び出し可能スキル）をサポートするチャンネルに登録",
  },
  "commands.text": {
    label: "テキストコマンド",
    help: "テキストコマンドパース（スラッシュコマンドのみ）を許可",
  },
  "commands.bash": {
    label: "Bashコマンド許可",
    help: "bashチャットコマンド（`!`; `/bash`エイリアス）でホストシェルコマンドを実行（デフォルト: false、tools.elevatedが必要）",
  },
  "commands.bashForegroundMs": {
    label: "Bashフォアグラウンドウィンドウ（ミリ秒）",
    help: "bashがバックグラウンドになるまでの待機時間（デフォルト: 2000、0で即時バックグラウンド）",
  },
  "commands.config": {
    label: "/config許可",
    help: "/configチャットコマンドでディスク上の設定を読み書き（デフォルト: false）",
  },
  "commands.debug": {
    label: "/debug許可",
    help: "/debugチャットコマンドでランタイム専用オーバーライド（デフォルト: false）",
  },
  "commands.restart": {
    label: "再起動許可",
    help: "/restartとゲートウェイ再起動ツールアクションを許可（デフォルト: false）",
  },
  "commands.useAccessGroups": {
    label: "アクセスグループ使用",
    help: "コマンドのアクセスグループ許可リスト/ポリシーを強制",
  },

  // ========================================
  // UI section
  // ========================================
  ui: {
    label: "UI",
  },
  "ui.theme": {
    label: "テーマ",
  },
  "ui.language": {
    label: "言語",
  },
  "ui.seamColor": {
    label: "アクセントカラー",
    help: "UIのアクセントカラー",
  },
  "ui.assistant": {
    label: "アシスタント",
  },
  "ui.assistant.name": {
    label: "アシスタント名",
    help: "アシスタントの表示名",
  },
  "ui.assistant.avatar": {
    label: "アシスタントアバター",
    help: "アシスタントのアバター画像",
  },

  // ========================================
  // Browser section
  // ========================================
  "browser.evaluateEnabled": {
    label: "ブラウザ評価有効",
    help: "ブラウザ評価機能を有効にする",
  },
  "browser.snapshotDefaults": {
    label: "ブラウザスナップショットデフォルト",
    help: "ブラウザスナップショットのデフォルト設定",
  },
  "browser.snapshotDefaults.mode": {
    label: "ブラウザスナップショットモード",
    help: "ブラウザスナップショットのモード",
  },
  "browser.remoteCdpTimeoutMs": {
    label: "リモートCDPタイムアウト（ミリ秒）",
    help: "リモートCDPタイムアウト（ミリ秒）",
  },
  "browser.remoteCdpHandshakeTimeoutMs": {
    label: "リモートCDPハンドシェイクタイムアウト（ミリ秒）",
    help: "リモートCDPハンドシェイクタイムアウト（ミリ秒）",
  },

  // ========================================
  // Web Server section
  // ========================================
  "web": {
    label: "Webサーバー",
  },
  "web.enabled": {
    label: "Webサーバー有効",
    help: "Webサーバーを有効にする",
  },
  "web.heartbeatSeconds": {
    label: "ハートビート間隔（秒）",
    help: "接続健全性チェックの間隔（秒）",
  },
  "web.reconnect": {
    label: "再接続設定",
  },
  "web.reconnect.initialMs": {
    label: "初期待機時間（ミリ秒）",
    help: "再接続の初期待機時間（ミリ秒）",
  },
  "web.reconnect.maxMs": {
    label: "最大待機時間（ミリ秒）",
    help: "再接続の最大待機時間（ミリ秒）",
  },
  "web.reconnect.factor": {
    label: "増加倍率",
    help: "待機時間の増加倍率",
  },
  "web.reconnect.jitter": {
    label: "ジッター",
    help: "待機時間のランダム変動（0-1）",
  },
  "web.reconnect.maxAttempts": {
    label: "最大試行回数",
    help: "再接続の最大試行回数（0で無制限）",
  },

  // ========================================
  // Broadcast section
  // ========================================
  "broadcast.enabled": {
    label: "有効",
  },
  "broadcast.channels": {
    label: "チャンネル",
  },

  // ========================================
  // Audio section
  // ========================================
  audio: {
    label: "オーディオ",
  },
  "audio.input": {
    label: "入力デバイス",
  },
  "audio.output": {
    label: "出力デバイス",
  },
  "audio.transcription": {
    label: "文字起こし",
    help: "オーディオ入出力設定",
  },
  "audio.transcription.command": {
    label: "コマンド",
    help: "文字起こしに使用するコマンド（例: whisper）",
  },
  "audio.transcription.timeoutSeconds": {
    label: "タイムアウト（秒）",
    help: "文字起こしのタイムアウト時間（秒）",
  },

  // ========================================
  // Media section
  // ========================================
  media: {
    label: "メディア",
    help: "画像・動画・ファイル処理設定",
  },
  "media.preserveFilenames": {
    label: "ファイル名を保持",
    help: "メディアファイルの元のファイル名を保持する",
  },

  // ========================================
  // Node Host section
  // ========================================
  "nodeHost.browserProxy": {
    label: "ブラウザプロキシ",
    help: "ノードホストのブラウザプロキシ設定",
  },
  "nodeHost.browserProxy.enabled": {
    label: "有効",
    help: "ノードホストでブラウザプロキシを有効にする（デフォルト: true）",
  },
  "nodeHost.browserProxy.allowProfiles": {
    label: "許可プロファイル",
    help: "プロキシ経由で公開するプロファイル名の許可リスト",
  },

  // ========================================
  // Canvas Host section
  // ========================================
  canvasHost: {
    label: "Canvasホスト",
  },
  "canvasHost.enabled": {
    label: "有効",
    help: "Canvasホストを有効にする",
  },
  "canvasHost.root": {
    label: "ルート",
    help: "Canvasファイルのルートディレクトリ",
  },
  "canvasHost.port": {
    label: "ポート",
    help: "Canvasホストのポート番号",
  },
  "canvasHost.liveReload": {
    label: "ライブリロード",
    help: "ファイル変更時の自動リロードを有効にする",
  },

  // ========================================
  // Talk section
  // ========================================
  talk: {
    label: "トーク",
  },
  "talk.enabled": {
    label: "有効",
  },
  "talk.voiceId": {
    label: "音声ID",
    help: "使用する音声のID",
  },
  "talk.voice": {
    label: "音声",
  },
  "talk.voiceAliases": {
    label: "音声エイリアス",
    help: "音声IDのエイリアスマップ",
  },
  "talk.modelId": {
    label: "モデルID",
    help: "使用するモデルのID",
  },
  "talk.outputFormat": {
    label: "出力フォーマット",
    help: "音声出力のフォーマット",
  },
  "talk.apiKey": {
    label: "Talk APIキー",
    help: "Talk機能のAPIキー",
  },
  "talk.interruptOnSpeech": {
    label: "発話で中断",
    help: "ユーザーの発話で現在の再生を中断する",
  },

  // ========================================
  // Plugins section
  // ========================================
  plugins: {
    label: "プラグイン",
  },
  "plugins.enabled": {
    label: "プラグイン有効",
    help: "プラグイン/拡張機能の読み込みを有効にする（デフォルト: true）",
  },
  "plugins.allow": {
    label: "許可リスト",
    help: "許可するプラグインのリスト",
  },
  "plugins.deny": {
    label: "拒否リスト",
    help: "拒否するプラグインのリスト",
  },
  "plugins.load": {
    label: "読み込み設定",
  },
  "plugins.load.paths": {
    label: "パス",
    help: "プラグインを読み込むパスのリスト",
  },
  "plugins.slots": {
    label: "スロット",
  },
  "plugins.slots.memory": {
    label: "メモリ",
    help: "メモリプラグインのスロット",
  },
  "plugins.entries": {
    label: "エントリ",
    help: "プラグインエントリの設定",
  },
  "plugins.list": {
    label: "プラグイン一覧",
  },
  "plugins.allow": {
    label: "プラグイン許可リスト",
    help: "オプションのプラグインID許可リスト。設定時、リストされたプラグインのみ読み込み",
  },
  "plugins.deny": {
    label: "プラグイン拒否リスト",
    help: "オプションのプラグインID拒否リスト。拒否は許可より優先",
  },
  "plugins.load": {
    label: "プラグイン読み込み",
  },
  "plugins.load.paths": {
    label: "プラグイン読み込みパス",
    help: "追加で読み込むプラグインファイルまたはディレクトリ",
  },
  "plugins.slots": {
    label: "プラグインスロット",
    help: "排他スロット（memory等）を所有するプラグインを選択",
  },
  "plugins.slots.memory": {
    label: "メモリプラグイン",
    help: "アクティブなメモリプラグインをIDで選択、または\"none\"でメモリプラグインを無効化",
  },
  "plugins.entries": {
    label: "プラグインエントリ",
    help: "プラグインID別の設定（有効/無効 + 設定ペイロード）",
  },
  "plugins.entries.*.enabled": {
    label: "プラグイン有効",
    help: "このエントリのプラグイン有効/無効を上書き（再起動が必要）",
  },
  "plugins.entries.*.config": {
    label: "プラグイン設定",
    help: "プラグイン定義の設定ペイロード（スキーマはプラグインが提供）",
  },
  "plugins.installs": {
    label: "プラグインインストール記録",
    help: "CLIが管理するインストールメタデータ（`openclaw plugins update`がインストールソースを検出するために使用）",
  },
  "plugins.installs.*.source": {
    label: "プラグインインストールソース",
    help: "インストールソース（\"npm\"、\"archive\"、または\"path\"）",
  },
  "plugins.installs.*.spec": {
    label: "プラグインインストールSpec",
    help: "インストールに使用した元のnpmスペック（ソースがnpmの場合）",
  },
  "plugins.installs.*.sourcePath": {
    label: "プラグインインストールソースパス",
    help: "インストールに使用した元のアーカイブ/パス（ある場合）",
  },
  "plugins.installs.*.installPath": {
    label: "プラグインインストールパス",
    help: "解決されたインストールディレクトリ（通常 ~/.openclaw/extensions/<id>）",
  },
  "plugins.installs.*.version": {
    label: "プラグインインストールバージョン",
    help: "インストール時に記録されたバージョン（利用可能な場合）",
  },
  "plugins.installs.*.installedAt": {
    label: "プラグインインストール日時",
    help: "最終インストール/更新のISOタイムスタンプ",
  },

  // ========================================
  // Wizard section (セットアップウィザード)
  // ========================================
  "wizard.lastRunAt": {
    label: "最終実行日時",
  },
  "wizard.lastRunCommand": {
    label: "最終実行コマンド",
  },
  "wizard.lastRunCommit": {
    label: "最終実行コミット",
  },
  "wizard.lastRunMode": {
    label: "最終実行モード",
  },
  "wizard.lastRunVersion": {
    label: "最終実行バージョン",
  },

  // ========================================
  // Broadcast section
  // ========================================
  broadcast: {
    label: "ブロードキャスト",
  },
  "broadcast.strategy": {
    label: "戦略",
    help: "ブロードキャストの配信戦略",
  },

  // ========================================
  // Channels additional keys
  // ========================================
  "channels.groupPolicy": {
    label: "グループポリシー",
    help: "チャンネルのグループポリシー設定",
  },
  "channels.heartbeat": {
    label: "ハートビート",
    help: "接続ハートビート設定",
  },

  // ========================================
  // Models additional keys
  // ========================================
  "models.bedrockDiscovery": {
    label: "Bedrock検出",
    help: "Amazon Bedrockモデルの自動検出",
  },
  "models.mode": {
    label: "モード",
    help: "モデル選択モード",
  },

  // ========================================
  // Session additional keys (resetByType子要素)
  // ========================================
  "session.dm": {
    label: "DM",
    help: "DMセッションのリセット設定",
  },
  "session.group": {
    label: "グループ",
    help: "グループセッションのリセット設定",
  },
  "session.thread": {
    label: "スレッド",
    help: "スレッドセッションのリセット設定",
  },

  // ========================================
  // Tools additional keys
  // ========================================
  "tools.allowAcrossProviders": {
    label: "プロバイダー間許可",
    help: "異なるプロバイダー間でのツール使用を許可",
  },
  "tools.allowCrossContextSend": {
    label: "コンテキスト間送信許可",
    help: "異なるコンテキスト間でのメッセージ送信を許可",
  },
  "tools.allowWithinProvider": {
    label: "プロバイダー内許可",
    help: "同一プロバイダー内でのツール使用を許可",
  },
  "tools.enabled": {
    label: "有効",
    help: "ツールを有効にする",
  },
  "tools.prefix": {
    label: "プレフィックス",
    help: "ツール名のプレフィックス",
  },
  "tools.suffix": {
    label: "サフィックス",
    help: "ツール名のサフィックス",
  },

  // ========================================
  // Common property keys (汎用プロパティ)
  // UIの様々な場所で使用される共通キー
  // ========================================
  account: { label: "アカウント" },
  accounts: { label: "アカウント一覧" },
  action: { label: "アクション" },
  agentDir: { label: "エージェントディレクトリ" },
  allow: { label: "許可" },
  allowAgents: { label: "エージェント許可" },
  allowBots: { label: "ボット許可" },
  allowFrom: { label: "許可元" },
  allowHostControl: { label: "ホスト制御許可" },
  allowUnsafeExternalContent: { label: "安全でない外部コンテンツを許可" },
  alsoAllow: { label: "追加許可" },
  api: { label: "API" },
  apiKey: { label: "APIキー" },
  appId: { label: "アプリID" },
  appPassword: { label: "アプリパスワード" },
  appToken: { label: "アプリトークン" },
  args: { label: "引数" },
  attachments: { label: "添付ファイル" },
  attempts: { label: "試行回数" },
  audience: { label: "オーディエンス" },
  audienceType: { label: "オーディエンスタイプ" },
  authDir: { label: "認証ディレクトリ" },
  authHeader: { label: "認証ヘッダー" },
  autoStart: { label: "自動起動" },
  autoStartTimeoutMs: { label: "自動起動タイムアウト（ミリ秒）" },
  autoThread: { label: "自動スレッド" },
  avatar: { label: "アバター" },
  baseUrl: { label: "ベースURL" },
  bind: { label: "バインド" },
  blockStreaming: { label: "ストリーミングブロック" },
  blockStreamingCoalesce: { label: "ストリーミング統合ブロック" },
  botToken: { label: "ボットトークン" },
  botUser: { label: "ボットユーザー" },
  browser: { label: "ブラウザ" },
  byProvider: { label: "プロバイダー別" },
  cacheRead: { label: "キャッシュ読み取り" },
  cacheTtlMinutes: { label: "キャッシュTTL（分）" },
  cacheWrite: { label: "キャッシュ書き込み" },
  capDrop: { label: "機能削除" },
  capabilities: { label: "機能" },
  cdpPort: { label: "CDPポート" },
  channel: { label: "チャンネル" },
  channelInfo: { label: "チャンネル情報" },
  channels: { label: "チャンネル" },
  chunkMode: { label: "チャンクモード" },
  clearEnv: { label: "環境変数クリア" },
  code: { label: "コード" },
  command: { label: "コマンド" },
  concurrency: { label: "並行数" },
  configWrites: { label: "設定書き込み" },
  containerPrefix: { label: "コンテナプレフィックス" },
  cpus: { label: "CPU数" },
  deepgram: { label: "Deepgram" },
  default: { label: "デフォルト" },
  defaultContextWindow: { label: "デフォルトコンテキストウィンドウ" },
  defaultMaxTokens: { label: "デフォルト最大トークン数" },
  deny: { label: "拒否" },
  discord: { label: "Discord" },
  dmHistoryLimit: { label: "DM履歴制限" },
  dmPolicy: { label: "DMポリシー" },
  dms: { label: "DM" },
  docker: { label: "Docker" },
  emoji: { label: "絵文字" },
  emojiList: { label: "絵文字リスト" },
  emojiUploads: { label: "絵文字アップロード" },
  enableNoVnc: { label: "NoVNC有効" },
  enabled: { label: "有効" },
  end: { label: "終了" },
  entries: { label: "エントリ" },
  env: { label: "環境変数" },
  event: { label: "イベント" },
  events: { label: "イベント一覧" },
  every: { label: "間隔" },
  export: { label: "エクスポート" },
  extraDirs: { label: "追加ディレクトリ" },
  extraPaths: { label: "追加パス" },
  fallbacks: { label: "フォールバック" },
  fetch: { label: "フェッチ" },
  groupAllowFrom: { label: "グループ許可元" },
  groupChannels: { label: "グループチャンネル" },
  groupChat: { label: "グループチャット" },
  groupEnabled: { label: "グループ有効" },
  groupPolicy: { label: "グループポリシー" },
  groups: { label: "グループ" },
  handlers: { label: "ハンドラー" },
  hard: { label: "ハード制限" },
  headers: { label: "ヘッダー" },
  headless: { label: "ヘッドレス" },
  heartbeat: { label: "ハートビート" },
  historyLimit: { label: "履歴制限" },
  historyScope: { label: "履歴スコープ" },
  hookUrl: { label: "フックURL" },
  humanDelay: { label: "ヒューマンディレイ" },
  id: { label: "ID" },
  identity: { label: "アイデンティティ" },
  idleHours: { label: "アイドル時間（時間）" },
  idleMs: { label: "アイドル時間（ミリ秒）" },
  image: { label: "イメージ" },
  imageArg: { label: "イメージ引数" },
  imageMode: { label: "イメージモード" },
  imessage: { label: "iMessage" },
  includeBody: { label: "ボディを含む" },
  inheritParent: { label: "親を継承" },
  input: { label: "入力" },
  jitter: { label: "ジッター" },
  keyPrefix: { label: "キープレフィックス" },
  label: { label: "ラベル" },
  language: { label: "言語" },
  lastTouchedAt: { label: "最終更新日時" },
  lastTouchedVersion: { label: "最終更新バージョン" },
  markdown: { label: "Markdown" },
  mattermost: { label: "Mattermost" },
  maxAgeDays: { label: "最大保存日数" },
  maxAttachments: { label: "最大添付数" },
  maxBytes: { label: "最大バイト数" },
  maxChars: { label: "最大文字数" },
  maxDelayMs: { label: "最大遅延（ミリ秒）" },
  maxLinesPerMessage: { label: "メッセージあたり最大行数" },
  maxLinks: { label: "最大リンク数" },
  maxMs: { label: "最大時間（ミリ秒）" },
  maxPromptArgChars: { label: "最大プロンプト引数文字数" },
  maxRedirects: { label: "最大リダイレクト数" },
  maxResults: { label: "最大結果数" },
  mediaMaxMb: { label: "メディア最大サイズ（MB）" },
  memberInfo: { label: "メンバー情報" },
  memory: { label: "メモリ" },
  memorySearch: { label: "メモリ検索" },
  memorySwap: { label: "メモリスワップ" },
  messagePrefix: { label: "メッセージプレフィックス" },
  minChars: { label: "最小文字数" },
  minDelayMs: { label: "最小遅延（ミリ秒）" },
  minMs: { label: "最小時間（ミリ秒）" },
  mode: { label: "モード" },
  model: { label: "モデル" },
  modelAliases: { label: "モデルエイリアス" },
  modelArg: { label: "モデル引数" },
  models: { label: "モデル" },
  moderation: { label: "モデレーション" },
  module: { label: "モジュール" },
  msteams: { label: "MS Teams" },
  name: { label: "名前" },
  native: { label: "ネイティブ" },
  nativeSkills: { label: "ネイティブスキル" },
  network: { label: "ネットワーク" },
  noVncPort: { label: "NoVNCポート" },
  output: { label: "出力" },
  path: { label: "パス" },
  perSession: { label: "セッションごと" },
  permissions: { label: "権限" },
  pidsLimit: { label: "PID制限" },
  pins: { label: "ピン" },
  policy: { label: "ポリシー" },
  polls: { label: "投票" },
  port: { label: "ポート" },
  preferredProfile: { label: "優先プロファイル" },
  primary: { label: "プライマリ" },
  profile: { label: "プロファイル" },
  prompt: { label: "プロンプト" },
  provider: { label: "プロバイダー" },
  providerFilter: { label: "プロバイダーフィルター" },
  providerOptions: { label: "プロバイダーオプション" },
  prune: { label: "プルーン" },
  pushToken: { label: "プッシュトークン" },
  reactionAllowlist: { label: "リアクション許可リスト" },
  reactionNotifications: { label: "リアクション通知" },
  reactions: { label: "リアクション" },
  readOnlyRoot: { label: "読み取り専用ルート" },
  reasoning: { label: "推論" },
  refreshInterval: { label: "更新間隔" },
  region: { label: "リージョン" },
  renewEveryMinutes: { label: "更新間隔（分）" },
  replyStyle: { label: "返信スタイル" },
  replyToMode: { label: "返信先モード" },
  replyToModeByChatType: { label: "チャットタイプ別返信先モード" },
  requireMention: { label: "メンション必須" },
  resumeArgs: { label: "再開引数" },
  resumeOutput: { label: "再開出力" },
  retry: { label: "リトライ" },
  roleInfo: { label: "ロール情報" },
  roles: { label: "ロール" },
  scope: { label: "スコープ" },
  search: { label: "検索" },
  selfChatMode: { label: "セルフチャットモード" },
  sendMessage: { label: "メッセージ送信" },
  sendReadReceipts: { label: "既読送信" },
  serialize: { label: "シリアライズ" },
  serviceAccount: { label: "サービスアカウント" },
  serviceAccountFile: { label: "サービスアカウントファイル" },
  sessionArg: { label: "セッション引数" },
  sessionArgs: { label: "セッション引数一覧" },
  sessionIdFields: { label: "セッションIDフィールド" },
  sessionMemory: { label: "セッションメモリ" },
  sessionToolsVisibility: { label: "セッションツール可視性" },
  setupCommand: { label: "セットアップコマンド" },
  showAlerts: { label: "アラート表示" },
  showOk: { label: "OK表示" },
  signal: { label: "シグナル" },
  signingSecret: { label: "署名シークレット" },
  skills: { label: "スキル" },
  slack: { label: "Slack" },
  slug: { label: "スラッグ" },
  soft: { label: "ソフト制限" },
  source: { label: "ソース" },
  sources: { label: "ソース一覧" },
  start: { label: "開始" },
  stickerUploads: { label: "ステッカーアップロード" },
  stickers: { label: "ステッカー" },
  subscription: { label: "サブスクリプション" },
  supportsDeveloperRole: { label: "開発者ロールサポート" },
  supportsReasoningEffort: { label: "推論努力サポート" },
  supportsStore: { label: "ストアサポート" },
  systemPrompt: { label: "システムプロンプト" },
  systemPromptArg: { label: "システムプロンプト引数" },
  systemPromptMode: { label: "システムプロンプトモード" },
  tables: { label: "テーブル" },
  telegram: { label: "Telegram" },
  tenantId: { label: "テナントID" },
  textChunkLimit: { label: "テキストチャンク制限" },
  theme: { label: "テーマ" },
  thread: { label: "スレッド" },
  threads: { label: "スレッド一覧" },
  timeoutSeconds: { label: "タイムアウト（秒）" },
  timezone: { label: "タイムゾーン" },
  tmpfs: { label: "tmpfs" },
  token: { label: "トークン" },
  toolsBySender: { label: "送信者別ツール" },
  topic: { label: "トピック" },
  topics: { label: "トピック一覧" },
  type: { label: "タイプ" },
  useIndicator: { label: "インジケーター使用" },
  user: { label: "ユーザー" },
  userAgent: { label: "ユーザーエージェント" },
  userToken: { label: "ユーザートークン" },
  userTokenReadOnly: { label: "ユーザートークン（読み取り専用）" },
  users: { label: "ユーザー一覧" },
  video: { label: "ビデオ" },
  vncPort: { label: "VNCポート" },
  voiceStatus: { label: "音声ステータス" },
  webchat: { label: "Webチャット" },
  webhookPath: { label: "Webhookパス" },
  webhookUrl: { label: "Webhook URL" },
  whatsapp: { label: "WhatsApp" },
  workdir: { label: "作業ディレクトリ" },
  workspace: { label: "ワークスペース" },
  workspaceAccess: { label: "ワークスペースアクセス" },
  workspaceRoot: { label: "ワークスペースルート" },
};
