'use client';
import { useState } from 'react';

export function CopyWechatButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  async function copyWechat() {
    try { await navigator.clipboard.writeText(value); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { setCopied(false); }
  }
  return <button className="copy-button" type="button" onClick={copyWechat} aria-label={`复制微信号 ${value}`}>{copied ? '已复制' : '复制微信'}</button>;
}
