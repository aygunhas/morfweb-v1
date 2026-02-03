/**
 * Loader'ı test etmek için geçici sayfa.
 * Bu sayfa 3 saniye bekleyip sonra içerik gösterir — o sürede loading.tsx görünür.
 * Testten sonra bu klasörü (test-loading/) silebilirsin.
 */
export default async function TestLoadingPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <p className="text-muted-foreground">
        Loader göründüyse test başarılı. Bu sayfayı ve{" "}
        <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-800">
          test-loading
        </code>{" "}
        klasörünü silebilirsin.
      </p>
    </div>
  );
}
