import { html, nothing } from "lit";

import { formatAgo } from "../format";
import type { DiscordStatus } from "../types";
import type { ChannelsProps } from "./channels.types";
import { renderChannelConfigSection } from "./channels.config";

export function renderDiscordCard(params: {
  props: ChannelsProps;
  discord?: DiscordStatus | null;
  accountCountLabel: unknown;
}) {
  const { props, discord, accountCountLabel } = params;

  return html`
    <div class="card">
      <div class="card-title">Discord</div>
      <div class="card-sub">Botのステータスとチャンネル設定。</div>
      ${accountCountLabel}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">設定済み</span>
          <span>${discord?.configured ? "はい" : "いいえ"}</span>
        </div>
        <div>
          <span class="label">実行中</span>
          <span>${discord?.running ? "はい" : "いいえ"}</span>
        </div>
        <div>
          <span class="label">最終起動</span>
          <span>${discord?.lastStartAt ? formatAgo(discord.lastStartAt) : "―"}</span>
        </div>
        <div>
          <span class="label">最終プローブ</span>
          <span>${discord?.lastProbeAt ? formatAgo(discord.lastProbeAt) : "―"}</span>
        </div>
      </div>

      ${discord?.lastError
        ? html`<div class="callout danger" style="margin-top: 12px;">
            ${discord.lastError}
          </div>`
        : nothing}

      ${discord?.probe
        ? html`<div class="callout" style="margin-top: 12px;">
            プローブ ${discord.probe.ok ? "成功" : "失敗"} ·
            ${discord.probe.status ?? ""} ${discord.probe.error ?? ""}
          </div>`
        : nothing}

      ${renderChannelConfigSection({ channelId: "discord", props })}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${() => props.onRefresh(true)}>
          プローブ
        </button>
      </div>
    </div>
  `;
}
