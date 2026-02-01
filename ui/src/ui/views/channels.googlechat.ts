import { html, nothing } from "lit";

import { formatAgo } from "../format";
import type { GoogleChatStatus } from "../types";
import { renderChannelConfigSection } from "./channels.config";
import type { ChannelsProps } from "./channels.types";

export function renderGoogleChatCard(params: {
  props: ChannelsProps;
  googleChat?: GoogleChatStatus | null;
  accountCountLabel: unknown;
}) {
  const { props, googleChat, accountCountLabel } = params;

  return html`
    <div class="card">
      <div class="card-title">Google Chat</div>
      <div class="card-sub">Chat APIウェブフックのステータスとチャンネル設定。</div>
      ${accountCountLabel}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">設定済み</span>
          <span>${googleChat ? (googleChat.configured ? "はい" : "いいえ") : "―"}</span>
        </div>
        <div>
          <span class="label">実行中</span>
          <span>${googleChat ? (googleChat.running ? "はい" : "いいえ") : "―"}</span>
        </div>
        <div>
          <span class="label">認証情報</span>
          <span>${googleChat?.credentialSource ?? "―"}</span>
        </div>
        <div>
          <span class="label">オーディエンス</span>
          <span>
            ${googleChat?.audienceType
              ? `${googleChat.audienceType}${googleChat.audience ? ` · ${googleChat.audience}` : ""}`
              : "―"}
          </span>
        </div>
        <div>
          <span class="label">最終起動</span>
          <span>${googleChat?.lastStartAt ? formatAgo(googleChat.lastStartAt) : "―"}</span>
        </div>
        <div>
          <span class="label">最終プローブ</span>
          <span>${googleChat?.lastProbeAt ? formatAgo(googleChat.lastProbeAt) : "―"}</span>
        </div>
      </div>

      ${googleChat?.lastError
        ? html`<div class="callout danger" style="margin-top: 12px;">
            ${googleChat.lastError}
          </div>`
        : nothing}

      ${googleChat?.probe
        ? html`<div class="callout" style="margin-top: 12px;">
            プローブ ${googleChat.probe.ok ? "成功" : "失敗"} ·
            ${googleChat.probe.status ?? ""} ${googleChat.probe.error ?? ""}
          </div>`
        : nothing}

      ${renderChannelConfigSection({ channelId: "googlechat", props })}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${() => props.onRefresh(true)}>
          プローブ
        </button>
      </div>
    </div>
  `;
}
