import { useRef, useState } from 'react';
import { api, ApiError } from '../api/client';
import type { Media } from '../api/types';
import { Loader2, Upload, X } from 'lucide-react';

export function UploadField({
  label,
  value,
  onChange,
  accept = 'image/*',
}: {
  label: string;
  value?: string;
  onChange: (url: string) => void;
  accept?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File) {
    setUploading(true);
    setError(null);
    try {
      const media = await api.upload<Media>('/api/media', file);
      onChange(media.url.startsWith('http') ? media.url : `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'}${media.url}`);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Upload failed. Try a smaller file.');
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <label className="text-sm font-medium text-ink/70">{label}</label>
      <div className="mt-1.5 flex items-center gap-3">
        {value ? (
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-ink/10 bg-ink/5">
            {accept.startsWith('video') ? (
              <video src={value} className="h-full w-full object-cover" muted />
            ) : (
              <img src={value} alt="" className="h-full w-full object-cover" />
            )}
            <button
              type="button"
              onClick={() => onChange('')}
              className="absolute right-0.5 top-0.5 rounded-full bg-ink/70 p-0.5 text-white"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ) : (
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-lg border border-dashed border-ink/20 text-ink/30">
            <Upload className="h-5 w-5" />
          </div>
        )}

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="rounded-full border border-ink/15 px-3.5 py-2 text-sm font-medium text-ink hover:border-ink/30 disabled:opacity-60"
        >
          {uploading ? (
            <span className="flex items-center gap-1.5"><Loader2 className="h-3.5 w-3.5 animate-spin" /> Uploading…</span>
          ) : value ? (
            'Replace'
          ) : (
            'Upload'
          )}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
            e.target.value = '';
          }}
        />
      </div>
      {error && <p className="mt-1.5 text-xs text-flame">{error}</p>}
    </div>
  );
}
