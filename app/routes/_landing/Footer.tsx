export function Footer() {
  return (
    <footer className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} ICC UH. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
