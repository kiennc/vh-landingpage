export function Footer() {
  return (
    <footer className="bg-gray-50 border-t pt-12 pb-8 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg text-primary mb-4">Vinhomes Market</h3>
          <p className="text-sm text-gray-500">Đơn vị phân phối và quản lý bất động sản cao cấp hàng đầu Việt Nam.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Khám phá</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-primary">Dự án Hà Nội</a></li>
            <li><a href="#" className="hover:text-primary">Dự án TP.HCM</a></li>
            <li><a href="#" className="hover:text-primary">Tuyển dụng</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Pháp lý</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-primary">Điều khoản sử dụng</a></li>
            <li><a href="#" className="hover:text-primary">Chính sách bảo mật</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Bản tin</h4>
          <div className="flex space-x-2">
            <input type="email" placeholder="Email của bạn" className="flex-1 px-3 py-2 border rounded-md text-sm outline-none focus:border-primary" />
            <button className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary/90">Đăng ký</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t text-center text-sm text-gray-500">
        &copy; 2026 Vinhomes Market. All rights reserved.
      </div>
    </footer>
  );
}
