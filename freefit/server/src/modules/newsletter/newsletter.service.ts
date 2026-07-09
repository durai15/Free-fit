import { Injectable } from '@nestjs/common';
import { CreateNewsletterSubscriberDto } from './dto/create-newsletter-subscriber.dto';

@Injectable()
export class NewsletterService {
  subscribe(createNewsletterSubscriberDto: CreateNewsletterSubscriberDto) {
    return {
      success: true,
      email: createNewsletterSubscriberDto.email
    };
  }
}
