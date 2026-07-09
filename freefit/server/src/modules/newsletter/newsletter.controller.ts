import { Body, Controller, Post } from '@nestjs/common';
import { CreateNewsletterSubscriberDto } from './dto/create-newsletter-subscriber.dto';
import { NewsletterService } from './newsletter.service';

@Controller('newsletter')
export class NewsletterController {
  constructor(private readonly newsletterService: NewsletterService) {}

  @Post()
  subscribe(@Body() createNewsletterSubscriberDto: CreateNewsletterSubscriberDto) {
    return this.newsletterService.subscribe(createNewsletterSubscriberDto);
  }
}
