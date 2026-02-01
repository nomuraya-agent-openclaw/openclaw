import { html, nothing } from "lit";

import { formatAgo } from "../format";
import type { SlackStatus } from "../types";
import type { ChannelsProps } from "./channels.types";
import { renderChannelConfigSection } from "./channels.config";

export function renderSlackCard(params: {
  props: ChannelsProps;
  slack?: SlackStatus | null;
  accountCountLabel: unknown;
}) {
  const { props, slack, accountCountLabel } = params;

  return html`
    <div class="card">
      <div class="card-title">Slack</div>
      <div class="card-sub">ソケットモードのステータスとチャンネル設定。</div>
      ${accountCountLabel}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">設定済み</span>
          <span>${slack?.configured ? "はい" : "いいえ"}</span>
        </div>
        <div>
          <span class="label">実行中</span>
          <span>${slack?.running ? "はい" : "いいえ"}</span>
        </div>
        <div>
          <span class="label">最終起動</span>
          <span>${slack?.lastStartAt ? formatAgo(slack.lastStartAt) : "―"}</span>
        </div>
        <div>
          <span class="label">最終プローブ</span>
          <span>${slack?.lastProbeAt ? formatAgo(slack.lastProbeAt) : "―"}</span>
        </div>
      </div>

      ${slack?.lastError
        ? html`<div class="callout danger" style="margin-top: 12px;">
            ${slack.lastError}
          </div>`
        : nothing}

      ${slack?.probe
        ? html`<div class="callout" style="margin-top: 12px;">
            プローブ ${slack.probe.ok ? "成功" : "失敗"} ·
            ${slack.probe.status ?? ""} ${slack.probe.error ?? ""}
          </div>`
        : nothing}

      ${renderChannelConfigSection({ channelId: "slack", props })}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${() => props.onRefresh(true)}>
          プローブ
        </button>
      </div>
    </div>
  `;
}
