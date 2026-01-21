import { useFullscreen } from "@/lib/utils.fullscreen"

export function FooterCommon() {
  const { isFullscreen } = useFullscreen();

  return (
    <footer
      className={`w-full shadow-t-sm border-t bg-white dark:bg-black shadow-amber-50 p-4 ${
        isFullscreen ? "hidden" : ""
      }`}
    >
      <div className="flex justify-center gap-2 text-center">
        <div>
          <p className="text-2xl md:text-3xl font-semibold">Qwerty.</p>
          <p className="text-sm text-gray-500">By @ynubhav 2025</p>
        </div>
      </div>
    </footer>
  );
}
