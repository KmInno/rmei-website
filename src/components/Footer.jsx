export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 text-center">
      <h3 className="text-xl font-bold mb-2">
        Return Missionary Entrepreneur Initiative
      </h3>

      <p className="text-sm">
        Kampala, Uganda
      </p>
2
      <p className="text-sm mt-2">
        Contact: kennethlubuulwa1820@gmail.com
      </p>

      <p className="text-sm mt-4">
        © {new Date().getFullYear()} RMEI. All rights reserved.
      </p>
    </footer>
  );
}