/**
 * Converts a Google Drive "share" link into a direct, embeddable image URL.
 *
 *   Share link (what you get from "Copy link"):
 *   https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *
 *   Direct link (what an <img> tag actually needs):
 *   https://lh3.googleusercontent.com/d/FILE_ID
 *
 * The file's sharing setting MUST be "Anyone with the link — Viewer",
 * otherwise this will still fail (Drive will return a permission/login
 * page instead of the image).
 */
export function toDriveDirectUrl(shareUrl) {
  if (!shareUrl) return shareUrl;

  const match = shareUrl.match(/\/file\/d\/([^/]+)/) || shareUrl.match(/[?&]id=([^&]+)/);
  const fileId = match?.[1];

  if (!fileId) return shareUrl; // not a recognizable Drive link — pass through

  return `https://lh3.googleusercontent.com/d/${fileId}`;
}