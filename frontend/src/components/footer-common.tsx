import { useFullscreen } from "@/lib/utils.fullscreen"

export function FooterCommon() {
  const {isFullscreen}=useFullscreen();
  return (
    <footer className={`shadow-t-sm border-t bg-white dark:bg-black shadow-amber-50 p-4 ${isFullscreen?'hidden':''}`}>
      <div className="flex justify-center gap-2">
        <div>
          <i className="text-sm text-gray-500">By @ynubhav 2025</i>
      <p className="text-4xl font-medium">Medium.</p>
        </div>
      </div>
    </footer>
  )
}