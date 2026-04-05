export type PropertyType = 'Căn hộ' | 'Biệt thự' | 'Shophouse' | 'Condotel';
export type PropertyStatus = 'Sắp mở bán' | 'Đang bàn giao' | 'Đã bàn giao' | 'Đang mở bán';

export interface Property {
  id: string;
  name: string;
  description: string;
  location: string;
  city: string;
  price: string;
  type: PropertyType;
  status: PropertyStatus;
  imageUrl: string;
  features?: string[];
}

export const MOCK_PROJECTS: Property[] = [
  {
    id: "p1",
    name: "Vinhomes Grand Park",
    description: "Thành phố thông minh - Công viên kiểu mẫu hàng đầu TP.HCM.",
    location: "Khu dân cư và Công viên Phước Thiện, Quận 9",
    city: "Hồ Chí Minh",
    price: "Từ 2.5 Tỷ",
    type: "Căn hộ",
    status: "Đang mở bán",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
    features: ["Công viên 36ha", "Bệnh viện Vinmec", "Trường học Vinschool"]
  },
  {
    id: "p2",
    name: "Vinhomes Ocean Park 2",
    description: "Khu đô thị sinh thái xanh mát với hồ nước mặn lớn nhất Việt Nam.",
    location: "Nghĩa Trụ, Hưng Yên",
    city: "Hưng Yên",
    price: "Từ 5.5 Tỷ",
    type: "Biệt thự",
    status: "Sắp mở bán",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    features: ["Hồ tạo sóng", "Khu phức hợp thể thao", "Công viên Royal Wave Park"]
  },
  {
    id: "p3",
    name: "The Global City",
    description: "Trung tâm mới của TP.HCM với chuẩn mực sống quốc tế.",
    location: "Đỗ Xuân Hợp, Phường An Phú, TP. Thủ Đức",
    city: "Hồ Chí Minh",
    price: "Từ 15 Tỷ",
    type: "Shophouse",
    status: "Đang mở bán",
    imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
    features: ["Khu phố Sohol", "Trung tâm thương mại", "Kênh đào nhạc nước"]
  },
  {
    id: "p4",
    name: "Masteri Centre Point",
    description: "Khu căn hộ compound cao cấp bậc nhất tại trung tâm Quận 9.",
    location: "Khu đô thị Vinhomes Grand Park, Quận 9",
    city: "Hồ Chí Minh",
    price: "Từ 3.2 Tỷ",
    type: "Căn hộ",
    status: "Đang bàn giao",
    imageUrl: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1000&q=80",
    features: ["Hồ bơi phi thuyền", "Khu BBQ", "Vườn đi dạo"]
  },
  {
    id: "p5",
    name: "Vinhomes Smart City",
    description: "Đại đô thị thông minh đẳng cấp quốc tế đầu tiên tại Việt Nam.",
    location: "Tây Mỗ, Nam Từ Liêm",
    city: "Hà Nội",
    price: "Từ 2.1 Tỷ",
    type: "Căn hộ",
    status: "Đã bàn giao",
    imageUrl: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1000&q=80",
    features: ["Vườn Nhật sinh thái", "Vinbus", "Đại lộ ánh sáng"]
  },
  {
    id: "p6",
    name: "Aqua City",
    description: "Khu đô thị vệ tinh sinh thái phía Đông Bắc TP.HCM.",
    location: "Đường Hương Lộ 2, Biên Hòa",
    city: "Đồng Nai",
    price: "Từ 6.8 Tỷ",
    type: "Biệt thự",
    status: "Sắp mở bán",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    features: ["Bến du thuyền", "Khu mua sắm", "Quảng trường"]
  }
];

export const CITIES = ["Tất cả", "Hồ Chí Minh", "Hà Nội", "Hưng Yên", "Đồng Nai", "Đà Nẵng"];
export const PROPERTY_TYPES = ["Tất cả", "Căn hộ", "Biệt thự", "Shophouse", "Condotel"];
export const PROPERTY_PRICES = ["Tất cả mức giá", "Dưới 3 Tỷ", "3 - 7 Tỷ", "7 - 15 Tỷ", "Trên 15 Tỷ"];
