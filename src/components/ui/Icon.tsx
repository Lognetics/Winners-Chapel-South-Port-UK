import {
  Sunrise, Church, BookOpen, Users, Heart, Flame, HeartPulse, Cross,
  TrendingUp, MessageCircle, Shield, Sparkles, Home, Baby, Rocket, Music,
  SlidersHorizontal, ShieldCheck, Hand, Coffee, Camera, UserCheck, Route,
  Megaphone, Bus, Stethoscope, HeartHandshake, ShoppingBasket,
  Briefcase, Wrench, GraduationCap, Handshake, MapPin, Phone, Mail, Clock,
  Play, Download, Calendar, ChevronRight, Menu, X, Radio, Tv, Mic, Image as ImageIcon,
  Gift, HandHeart, PhoneCall, CircleDollarSign, QrCode, Star, Quote,
  MessageSquare, ArrowRight, ArrowUpRight, Check,
  Navigation, Video, Headphones, PenLine, type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  sunrise: Sunrise, church: Church, book: BookOpen, "book-open": BookOpen, users: Users,
  heart: Heart, flame: Flame, "heart-pulse": HeartPulse, cross: Cross,
  "trending-up": TrendingUp, "message-circle": MessageCircle, shield: Shield,
  sparkles: Sparkles, home: Home, baby: Baby, rocket: Rocket, music: Music,
  sliders: SlidersHorizontal, "shield-check": ShieldCheck, hand: Hand, coffee: Coffee,
  camera: Camera, "user-check": UserCheck, route: Route, megaphone: Megaphone, bus: Bus,
  stethoscope: Stethoscope, "heart-handshake": HeartHandshake, "shopping-basket": ShoppingBasket,
  briefcase: Briefcase, wrench: Wrench, "graduation-cap": GraduationCap, handshake: Handshake,
  "map-pin": MapPin, phone: Phone, mail: Mail, clock: Clock, play: Play, download: Download,
  calendar: Calendar, "chevron-right": ChevronRight, menu: Menu, x: X, radio: Radio, tv: Tv,
  mic: Mic, image: ImageIcon, gift: Gift, "hand-heart": HandHeart, "phone-call": PhoneCall,
  "circle-dollar": CircleDollarSign, qr: QrCode, star: Star, quote: Quote,
  "message-square": MessageSquare,
  "arrow-right": ArrowRight, "arrow-up-right": ArrowUpRight, check: Check, navigation: Navigation,
  video: Video, headphones: Headphones, "pen-line": PenLine,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
