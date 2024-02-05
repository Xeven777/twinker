// "use server";

export function getId(tweetUrl: string): string {
  const url = new URL(tweetUrl);
  const pathComponents = url.pathname.split('/');
  const tweetId = pathComponents[pathComponents.length - 1];
  return tweetId;
}