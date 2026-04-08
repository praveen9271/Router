function Footer() {
  return (
    <footer className="bg-[#0b1a2b] text-white py-4 mt-auto">

      <div className="text-center text-sm">
        © {new Date().getFullYear()} MySite. All rights reserved.
      </div>

      <div className="flex justify-center gap-6 mt-2 text-sm">
        <a href="#" className="hover:text-yellow-400">Privacy</a>
        <a href="#" className="hover:text-yellow-400">Terms</a>
        <a href="#" className="hover:text-yellow-400">Support</a>
      </div>

    </footer>
  );
}

export default Footer;