import { html, nothing } from "lit";

import { formatAgo } from "../format";
import type { IMessageStatus } from "../types";
import type { ChannelsProps } from "./channels.types";
import { renderChannelConfigSection } from "./channels.config";

export function renderIMessageCard(params: {
  props: ChannelsProps;
  imessage?: IMessageStatus | null;
  accountCountLabel: unknown;
}) {
  const { props, imessage, accountCountLabel } = params;

  return html`
    <div class="card">
      <div class="card-title">iMessage</div>
      <div class="card-sub">macOSブリッジのステータスとチャンネル設定。</div>
      ${accountCountLabel}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">設定済み</span>
          <span>${imessage?.configured ? "はい" : "いいえ"}</span>
        </div>
        <div>
          <span class="label">実行中</span>
          <span>${imessage?.running ? "はい" : "いいえ"}</span>
        </div>
        <div>
          <span class="label">最終起動</span>
          <span>${imessage?.lastStartAt ? formatAgo(imessage.lastStartAt) : "―"}</span>
        </div>
        <div>
          <span class="label">最終プローブ</span>
          <span>${imessage?.lastProbeAt ? formatAgo(imessage.lastProbeAt) : "―"}</span>
        </div>
      </div>

      ${imessage?.lastError
        ? html`<div class="callout danger" style="margin-top: 12px;">
            ${imessage.lastError}
          </div>`
        : nothing}

      ${imessage?.probe
        ? html`<div class="callout" style="margin-top: 12px;">
            プローブ ${imessage.probe.ok ? "成功" : "失敗"} ·
            ${imessage.probe.error ?? ""}
          </div>`
        : nothing}

      ${renderChannelConfigSection({ channelId: "imessage", props })}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${() => props.onRefresh(true)}>
          プローブ
        </button>
      </div>
    </div>
  `;
}
