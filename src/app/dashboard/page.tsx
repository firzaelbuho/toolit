// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return (
      <div className="min-h-screen flex items-center justify-center">
      {/* Main Content (span 8 kolom) */}
      <div className="col-span-6">
        {/* Konten utama Anda di sini */}
        <p>main</p>
      </div>

      {/* Sidebar (span 4 kolom) */}
      <div className="col-span-2">
        {/* Konten sidebar Anda di sini */}
        <p>sidebar</p>

      </div>
    </div>
    )
  }