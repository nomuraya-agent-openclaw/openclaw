import { html, nothing } from "lit";

import { formatAgo } from "../format";
import type { SignalStatus } from "../types";
import type { ChannelsProps } from "./channels.types";
import { renderChannelConfigSection } from "./channels.config";

export function renderSignalCard(params: {
  props: ChannelsProps;
  signal?: SignalStatus | null;
  accountCountLabel: unknown;
}) {
  const { props, signal, accountCountLabel } = params;

  return html`
    <div class="card">
      <div class="card-title">Signal</div>
      <div class="card-sub">signal-cliのステータスとチャンネル設定。</div>
      ${accountCountLabel}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">設定済み</span>
          <span>${signal?.configured ? "はい" : "いいえ"}</span>
        </div>
        <div>
          <span class="label">実行中</span>
          <span>${signal?.running ? "はい" : "いいえ"}</span>
        </div>
        <div>
          <span class="label">ベースURL</span>
          <span>${signal?.baseUrl ?? "―"}</span>
        </div>
        <div>
          <span class="label">最終起動</span>
          <span>${signal?.lastStartAt ? formatAgo(signal.lastStartAt) : "―"}</span>
        </div>
        <div>
          <span class="label">最終プローブ</span>
          <span>${signal?.lastProbeAt ? formatAgo(signal.lastProbeAt) : "―"}</span>
        </div>
      </div>

      ${signal?.lastError
        ? html`<div class="callout danger" style="margin-top: 12px;">
            ${signal.lastError}
          </div>`
        : nothing}

      ${signal?.probe
        ? html`<div class="callout" style="margin-top: 12px;">
            プローブ ${signal.probe.ok ? "成功" : "失敗"} ·
            ${signal.probe.status ?? ""} ${signal.probe.error ?? ""}
          </div>`
        : nothing}

      ${renderChannelConfigSection({ channelId: "signal", props })}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${() => props.onRefresh(true)}>
          プローブ
        </button>
      </div>
    </div>
  `;
}
