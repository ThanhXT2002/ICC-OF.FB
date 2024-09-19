import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featback.component.html',
  styleUrl: './featback.component.scss'
})
export class FeatbackComponent implements OnInit {
  currentIndex = 0;
  testimonials = [
    {
      name: 'Anh Hồ Văn Thái',
      feedback: `Tôi đã tham khảo rất nhiều dịch vụ bảo hiểm và đã chọn dịch vụ của Bảo hiểm ICC với lý do ban đầu là chi phí rất tiết kiệm so với các dịch vụ tương tự trên thị trường.
      Khi gặp sự cố va chạm xe hơi trên cao tốc, chỉ trong vòng nửa giờ toàn bộ quyền lợi của tôi đã được hỗ trợ xử lý cực kỳ nhanh chóng và thuận tiện.`,
      img: 'assets/img/avatar/Ho-Minh-Thai-02-01.png'
    },
    {
      name: 'Chị Linh Nguyễn',
      feedback: `Là phụ nữ, khi quyết định mua xe, tôi đã rấ lo sợ các rủi ro như
                  va chạm, cháy, nổ, trộm cướp, thiên tai…Tôi đã chọn Bảo hiểm ICC vì các điều khoản bảo vệ vô cùng
                  tốt, hơn nữa còn có hỗ cứu hộ miễn phí 24/7 và các giải pháp hỗ trợ chủ xe trong trường hợp gặp trục
                  trặc, sự cố khi đang lưu thông.`,
      img: 'assets/img/avatar/Thuy-Linh-01.png'
    },
    // Thêm các testimonials khác nếu cần
  ];


  ngOnInit(): void {}

  prevSlide(): void {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.testimonials.length - 1;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }
}
