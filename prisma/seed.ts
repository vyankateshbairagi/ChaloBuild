import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Prisma, MemberStatus, SubscriptionStatus, PaymentMethod, ExpenseCategory } from "@prisma/client";
import bcrypt from "bcryptjs";

if (process.env.NODE_ENV === "production") {
  throw new Error(
    "Demo seed is disabled in production. Create production accounts using the approved onboarding procedure."
  );
}

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  throw new Error("DATABASE_URL is not set.");
}

const adapter = new PrismaPg({ connectionString: dbUrl });
const db = new PrismaClient({ adapter });

// Demo credentials
export const DEMO_ORG_SLUG = "demo-gym";
export const DEMO_OWNER_EMAIL = "owner@demogym.test";
export const DEMO_STAFF_EMAIL = "staff@demogym.test";
export const DEMO_PASSWORD = "password123";

function dayStartUtc(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

function daysAgo(days: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d;
}

function daysAhead(days: number): Date {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d;
}

// 50 realistic Indian gym members
interface DemoMemberDef {
  code: string;
  name: string;
  phone: string;
  email: string;
  gender: "MALE" | "FEMALE";
  age: number;
  address: string;
  emergencyContact: string;
  daysJoinedAgo: number;
  status: MemberStatus;
  planKey?: "monthly" | "quarterly" | "halfYearly" | "annual" | "weekend";
  subStatus?: SubscriptionStatus;
  subDaysRemaining?: number; // positive = days ahead, negative = expired days ago
  partialPaymentAmount?: number; // if set, pays less than full amount to create pending balance
  paymentMethod?: PaymentMethod;
}

const DEMO_MEMBERS_DATA: DemoMemberDef[] = [
  // 1 to 30: ACTIVE subscriptions with comfortable validity
  { code: "DEMO-1001", name: "Aarav Sharma", phone: "9800000001", email: "demo.member01@ironcore.test", gender: "MALE", age: 28, address: "Baner, Pune", emergencyContact: "Sunita Sharma (Mother) - 9811100001", daysJoinedAgo: 180, status: "ACTIVE", planKey: "annual", subStatus: "ACTIVE", subDaysRemaining: 185, paymentMethod: "UPI" },
  { code: "DEMO-1002", name: "Sneha Deshmukh", phone: "9800000002", email: "demo.member02@ironcore.test", gender: "FEMALE", age: 26, address: "Kothrud, Pune", emergencyContact: "Vijay Deshmukh (Father) - 9811100002", daysJoinedAgo: 90, status: "ACTIVE", planKey: "halfYearly", subStatus: "ACTIVE", subDaysRemaining: 90, paymentMethod: "CARD" },
  { code: "DEMO-1003", name: "Rohan Patil", phone: "9800000003", email: "demo.member03@ironcore.test", gender: "MALE", age: 32, address: "Aundh, Pune", emergencyContact: "Pooja Patil (Spouse) - 9811100003", daysJoinedAgo: 240, status: "ACTIVE", planKey: "annual", subStatus: "ACTIVE", subDaysRemaining: 125, paymentMethod: "UPI" },
  { code: "DEMO-1004", name: "Priya Joshi", phone: "9800000004", email: "demo.member04@ironcore.test", gender: "FEMALE", age: 29, address: "Viman Nagar, Pune", emergencyContact: "Anand Joshi (Brother) - 9811100004", daysJoinedAgo: 45, status: "ACTIVE", planKey: "quarterly", subStatus: "ACTIVE", subDaysRemaining: 45, paymentMethod: "UPI" },
  { code: "DEMO-1005", name: "Aditya Kulkarni", phone: "9800000005", email: "demo.member05@ironcore.test", gender: "MALE", age: 25, address: "Shivajinagar, Pune", emergencyContact: "Ramesh Kulkarni (Father) - 9811100005", daysJoinedAgo: 20, status: "ACTIVE", planKey: "monthly", subStatus: "ACTIVE", subDaysRemaining: 10, paymentMethod: "CASH" },
  { code: "DEMO-1006", name: "Ananya Pawar", phone: "9800000006", email: "demo.member06@ironcore.test", gender: "FEMALE", age: 24, address: "Kalyani Nagar, Pune", emergencyContact: "Meena Pawar (Mother) - 9811100006", daysJoinedAgo: 60, status: "ACTIVE", planKey: "quarterly", subStatus: "ACTIVE", subDaysRemaining: 30, paymentMethod: "ONLINE" },
  { code: "DEMO-1007", name: "Rahul More", phone: "9800000007", email: "demo.member07@ironcore.test", gender: "MALE", age: 35, address: "Model Colony, Pune", emergencyContact: "Kavita More (Spouse) - 9811100007", daysJoinedAgo: 300, status: "ACTIVE", planKey: "annual", subStatus: "ACTIVE", subDaysRemaining: 65, paymentMethod: "BANK_TRANSFER" },
  { code: "DEMO-1008", name: "Neha Shinde", phone: "9800000008", email: "demo.member08@ironcore.test", gender: "FEMALE", age: 31, address: "Deccan Gymkhana, Pune", emergencyContact: "Sachin Shinde (Spouse) - 9811100008", daysJoinedAgo: 75, status: "ACTIVE", planKey: "halfYearly", subStatus: "ACTIVE", subDaysRemaining: 105, paymentMethod: "UPI" },
  { code: "DEMO-1009", name: "Vikram Malhotra", phone: "9800000009", email: "demo.member09@ironcore.test", gender: "MALE", age: 40, address: "Koregaon Park, Pune", emergencyContact: "Simran Malhotra (Spouse) - 9811100009", daysJoinedAgo: 150, status: "ACTIVE", planKey: "annual", subStatus: "ACTIVE", subDaysRemaining: 215, paymentMethod: "CARD" },
  { code: "DEMO-1010", name: "Pooja Rathi", phone: "9800000010", email: "demo.member10@ironcore.test", gender: "FEMALE", age: 27, address: "Wakad, Pune", emergencyContact: "Ashok Rathi (Father) - 9811100010", daysJoinedAgo: 15, status: "ACTIVE", planKey: "monthly", subStatus: "ACTIVE", subDaysRemaining: 15, paymentMethod: "UPI" },
  { code: "DEMO-1011", name: "Karan Verma", phone: "9800000011", email: "demo.member11@ironcore.test", gender: "MALE", age: 23, address: "Hinjewadi, Pune", emergencyContact: "Deepak Verma (Brother) - 9811100011", daysJoinedAgo: 40, status: "ACTIVE", planKey: "quarterly", subStatus: "ACTIVE", subDaysRemaining: 50, paymentMethod: "UPI" },
  { code: "DEMO-1012", name: "Meera Iyer", phone: "9800000012", email: "demo.member12@ironcore.test", gender: "FEMALE", age: 33, address: "Magarpatta, Pune", emergencyContact: "Karthik Iyer (Spouse) - 9811100012", daysJoinedAgo: 110, status: "ACTIVE", planKey: "halfYearly", subStatus: "ACTIVE", subDaysRemaining: 70, paymentMethod: "CARD" },
  { code: "DEMO-1013", name: "Siddharth Nair", phone: "9800000013", email: "demo.member13@ironcore.test", gender: "MALE", age: 30, address: "Bavdhan, Pune", emergencyContact: "Radha Nair (Mother) - 9811100013", daysJoinedAgo: 12, status: "ACTIVE", planKey: "weekend", subStatus: "ACTIVE", subDaysRemaining: 18, paymentMethod: "UPI" },
  { code: "DEMO-1014", name: "Tanvi Mehta", phone: "9800000014", email: "demo.member14@ironcore.test", gender: "FEMALE", age: 28, address: "FC Road, Pune", emergencyContact: "Nilesh Mehta (Brother) - 9811100014", daysJoinedAgo: 210, status: "ACTIVE", planKey: "annual", subStatus: "ACTIVE", subDaysRemaining: 155, paymentMethod: "UPI" },
  { code: "DEMO-1015", name: "Rohit Sawant", phone: "9800000015", email: "demo.member15@ironcore.test", gender: "MALE", age: 36, address: "Pimple Saudagar, Pune", emergencyContact: "Shraddha Sawant (Spouse) - 9811100015", daysJoinedAgo: 50, status: "ACTIVE", planKey: "quarterly", subStatus: "ACTIVE", subDaysRemaining: 40, paymentMethod: "CASH" },
  { code: "DEMO-1016", name: "Divya Rao", phone: "9800000016", email: "demo.member16@ironcore.test", gender: "FEMALE", age: 25, address: "Senapati Bapat Road, Pune", emergencyContact: "Suresh Rao (Father) - 9811100016", daysJoinedAgo: 100, status: "ACTIVE", planKey: "halfYearly", subStatus: "ACTIVE", subDaysRemaining: 80, paymentMethod: "ONLINE" },
  { code: "DEMO-1017", name: "Amit Gokhale", phone: "9800000017", email: "demo.member17@ironcore.test", gender: "MALE", age: 42, address: "Prabhat Road, Pune", emergencyContact: "Swati Gokhale (Spouse) - 9811100017", daysJoinedAgo: 320, status: "ACTIVE", planKey: "annual", subStatus: "ACTIVE", subDaysRemaining: 45, paymentMethod: "BANK_TRANSFER" },
  { code: "DEMO-1018", name: "Ishaan Kapse", phone: "9800000018", email: "demo.member18@ironcore.test", gender: "MALE", age: 22, address: "Law College Road, Pune", emergencyContact: "Milind Kapse (Father) - 9811100018", daysJoinedAgo: 18, status: "ACTIVE", planKey: "monthly", subStatus: "ACTIVE", subDaysRemaining: 12, paymentMethod: "UPI" },
  { code: "DEMO-1019", name: "Riya Sen", phone: "9800000019", email: "demo.member19@ironcore.test", gender: "FEMALE", age: 27, address: "Erandwane, Pune", emergencyContact: "Alok Sen (Father) - 9811100019", daysJoinedAgo: 85, status: "ACTIVE", planKey: "halfYearly", subStatus: "ACTIVE", subDaysRemaining: 95, paymentMethod: "CARD" },
  { code: "DEMO-1020", name: "Kunal Kamat", phone: "9800000020", email: "demo.member20@ironcore.test", gender: "MALE", age: 34, address: "Kothrud, Pune", emergencyContact: "Anita Kamat (Spouse) - 9811100020", daysJoinedAgo: 70, status: "ACTIVE", planKey: "quarterly", subStatus: "ACTIVE", subDaysRemaining: 20, paymentMethod: "UPI" },
  { code: "DEMO-1021", name: "Shreya Bhosale", phone: "9800000021", email: "demo.member21@ironcore.test", gender: "FEMALE", age: 29, address: "Baner, Pune", emergencyContact: "Sunil Bhosale (Father) - 9811100021", daysJoinedAgo: 160, status: "ACTIVE", planKey: "annual", subStatus: "ACTIVE", subDaysRemaining: 205, paymentMethod: "UPI" },
  { code: "DEMO-1022", name: "Arjun Ranade", phone: "9800000022", email: "demo.member22@ironcore.test", gender: "MALE", age: 31, address: "Aundh, Pune", emergencyContact: "Shubha Ranade (Spouse) - 9811100022", daysJoinedAgo: 40, status: "ACTIVE", planKey: "quarterly", subStatus: "ACTIVE", subDaysRemaining: 50, paymentMethod: "CASH" },
  { code: "DEMO-1023", name: "Natasha Fernandez", phone: "9800000023", email: "demo.member23@ironcore.test", gender: "FEMALE", age: 28, address: "Camp, Pune", emergencyContact: "David Fernandez (Father) - 9811100023", daysJoinedAgo: 95, status: "ACTIVE", planKey: "halfYearly", subStatus: "ACTIVE", subDaysRemaining: 85, paymentMethod: "CARD" },
  { code: "DEMO-1024", name: "Varun Chitnis", phone: "9800000024", email: "demo.member24@ironcore.test", gender: "MALE", age: 26, address: "Karve Nagar, Pune", emergencyContact: "Sanjay Chitnis (Father) - 9811100024", daysJoinedAgo: 8, status: "ACTIVE", planKey: "monthly", subStatus: "ACTIVE", subDaysRemaining: 22, paymentMethod: "UPI" },
  { code: "DEMO-1025", name: "Radhika Apte", phone: "9800000025", email: "demo.member25@ironcore.test", gender: "FEMALE", age: 30, address: "Model Colony, Pune", emergencyContact: "Girish Apte (Brother) - 9811100025", daysJoinedAgo: 130, status: "ACTIVE", planKey: "halfYearly", subStatus: "ACTIVE", subDaysRemaining: 50, paymentMethod: "UPI" },
  { code: "DEMO-1026", name: "Harshvardhan Gadgil", phone: "9800000026", email: "demo.member26@ironcore.test", gender: "MALE", age: 38, address: "Sadashiv Peth, Pune", emergencyContact: "Madhuri Gadgil (Spouse) - 9811100026", daysJoinedAgo: 260, status: "ACTIVE", planKey: "annual", subStatus: "ACTIVE", subDaysRemaining: 105, paymentMethod: "BANK_TRANSFER" },
  { code: "DEMO-1027", name: "Ankita Tambe", phone: "9800000027", email: "demo.member27@ironcore.test", gender: "FEMALE", age: 24, address: "Viman Nagar, Pune", emergencyContact: "Umesh Tambe (Father) - 9811100027", daysJoinedAgo: 65, status: "ACTIVE", planKey: "quarterly", subStatus: "ACTIVE", subDaysRemaining: 25, paymentMethod: "UPI" },
  { code: "DEMO-1028", name: "Nikhil Joshi", phone: "9800000028", email: "demo.member28@ironcore.test", gender: "MALE", age: 27, address: "Sinhagad Road, Pune", emergencyContact: "Pradeep Joshi (Father) - 9811100028", daysJoinedAgo: 25, status: "ACTIVE", planKey: "monthly", subStatus: "ACTIVE", subDaysRemaining: 5, paymentMethod: "UPI" },
  // 29 & 30: Have partial payment pending to give the dashboard a realistic Outstanding / Pending Fees balance
  { code: "DEMO-1029", name: "Sayali Jadhav", phone: "9800000029", email: "demo.member29@ironcore.test", gender: "FEMALE", age: 26, address: "Katraj, Pune", emergencyContact: "Nitin Jadhav (Brother) - 9811100029", daysJoinedAgo: 120, status: "ACTIVE", planKey: "annual", subStatus: "ACTIVE", subDaysRemaining: 245, partialPaymentAmount: 10000, paymentMethod: "UPI" }, // owes 4999
  { code: "DEMO-1030", name: "Gaurav Deshpande", phone: "9800000030", email: "demo.member30@ironcore.test", gender: "MALE", age: 33, address: "Bibwewadi, Pune", emergencyContact: "Rohini Deshpande (Spouse) - 9811100030", daysJoinedAgo: 100, status: "ACTIVE", planKey: "halfYearly", subStatus: "ACTIVE", subDaysRemaining: 80, partialPaymentAmount: 6000, paymentMethod: "CARD" }, // owes 2999

  // 31 to 34: EXPIRING SOON! (Ends in 1 to 7 days, populates Dashboard "Expiring Soon" widget)
  { code: "DEMO-1031", name: "Tejaswini Phadke", phone: "9800000031", email: "demo.member31@ironcore.test", gender: "FEMALE", age: 32, address: "Sahakar Nagar, Pune", emergencyContact: "Amit Phadke (Spouse) - 9811100031", daysJoinedAgo: 28, status: "ACTIVE", planKey: "monthly", subStatus: "ACTIVE", subDaysRemaining: 2, paymentMethod: "UPI" },
  { code: "DEMO-1032", name: "Omkar Gaikwad", phone: "9800000032", email: "demo.member32@ironcore.test", gender: "MALE", age: 29, address: "Dhayari, Pune", emergencyContact: "Sharad Gaikwad (Father) - 9811100032", daysJoinedAgo: 87, status: "ACTIVE", planKey: "quarterly", subStatus: "ACTIVE", subDaysRemaining: 3, paymentMethod: "UPI" },
  { code: "DEMO-1033", name: "Pallavi Kadam", phone: "9800000033", email: "demo.member33@ironcore.test", gender: "FEMALE", age: 27, address: "Warje, Pune", emergencyContact: "Sagar Kadam (Brother) - 9811100033", daysJoinedAgo: 175, status: "ACTIVE", planKey: "halfYearly", subStatus: "ACTIVE", subDaysRemaining: 5, paymentMethod: "CARD" },
  { code: "DEMO-1034", name: "Pranav Soman", phone: "9800000034", email: "demo.member34@ironcore.test", gender: "MALE", age: 25, address: "Pashan, Pune", emergencyContact: "Anand Soman (Father) - 9811100034", daysJoinedAgo: 83, status: "ACTIVE", planKey: "quarterly", subStatus: "ACTIVE", subDaysRemaining: 7, partialPaymentAmount: 3500, paymentMethod: "CASH" }, // owes 1499

  // 35 to 42: EXPIRED subscriptions
  { code: "DEMO-1035", name: "Gauri Bapat", phone: "9800000035", email: "demo.member35@ironcore.test", gender: "FEMALE", age: 35, address: "Sus Road, Pune", emergencyContact: "Shailesh Bapat (Spouse) - 9811100035", daysJoinedAgo: 40, status: "EXPIRED", planKey: "monthly", subStatus: "EXPIRED", subDaysRemaining: -10, paymentMethod: "UPI" },
  { code: "DEMO-1036", name: "Sameer Inamdar", phone: "9800000036", email: "demo.member36@ironcore.test", gender: "MALE", age: 45, address: "Salisbury Park, Pune", emergencyContact: "Rekha Inamdar (Spouse) - 9811100036", daysJoinedAgo: 110, status: "EXPIRED", planKey: "quarterly", subStatus: "EXPIRED", subDaysRemaining: -20, paymentMethod: "BANK_TRANSFER" },
  { code: "DEMO-1037", name: "Aditi Moghe", phone: "9800000037", email: "demo.member37@ironcore.test", gender: "FEMALE", age: 23, address: "Balewadi, Pune", emergencyContact: "Subhash Moghe (Father) - 9811100037", daysJoinedAgo: 50, status: "EXPIRED", planKey: "monthly", subStatus: "EXPIRED", subDaysRemaining: -20, paymentMethod: "UPI" },
  { code: "DEMO-1038", name: "Swapnil Khare", phone: "9800000038", email: "demo.member38@ironcore.test", gender: "MALE", age: 37, address: "Ravet, Pune", emergencyContact: "Vidya Khare (Spouse) - 9811100038", daysJoinedAgo: 215, status: "EXPIRED", planKey: "halfYearly", subStatus: "EXPIRED", subDaysRemaining: -35, paymentMethod: "CARD" },
  { code: "DEMO-1039", name: "Sanika Tendulkar", phone: "9800000039", email: "demo.member39@ironcore.test", gender: "FEMALE", age: 28, address: "Nigdi, Pune", emergencyContact: "Ajay Tendulkar (Brother) - 9811100039", daysJoinedAgo: 65, status: "EXPIRED", planKey: "monthly", subStatus: "EXPIRED", subDaysRemaining: -35, paymentMethod: "UPI" },
  { code: "DEMO-1040", name: "Mayur Dandekar", phone: "9800000040", email: "demo.member40@ironcore.test", gender: "MALE", age: 30, address: "Bhosari, Pune", emergencyContact: "Dinesh Dandekar (Father) - 9811100040", daysJoinedAgo: 125, status: "EXPIRED", planKey: "quarterly", subStatus: "EXPIRED", subDaysRemaining: -35, paymentMethod: "CASH" },
  { code: "DEMO-1041", name: "Ketaki Pendse", phone: "9800000041", email: "demo.member41@ironcore.test", gender: "FEMALE", age: 31, address: "Chinchwad, Pune", emergencyContact: "Nikhil Pendse (Spouse) - 9811100041", daysJoinedAgo: 75, status: "EXPIRED", planKey: "monthly", subStatus: "EXPIRED", subDaysRemaining: -45, paymentMethod: "UPI" },
  { code: "DEMO-1042", name: "Chinmay Kelkar", phone: "9800000042", email: "demo.member42@ironcore.test", gender: "MALE", age: 24, address: "Pimpri, Pune", emergencyContact: "Milind Kelkar (Father) - 9811100042", daysJoinedAgo: 240, status: "EXPIRED", planKey: "halfYearly", subStatus: "EXPIRED", subDaysRemaining: -60, paymentMethod: "CARD" },

  // 43 to 45: CANCELLED / INACTIVE
  { code: "DEMO-1043", name: "Swati Sathe", phone: "9800000043", email: "demo.member43@ironcore.test", gender: "FEMALE", age: 36, address: "Dange Chowk, Pune", emergencyContact: "Abhijit Sathe (Spouse) - 9811100043", daysJoinedAgo: 60, status: "INACTIVE", planKey: "monthly", subStatus: "CANCELLED", subDaysRemaining: -15, paymentMethod: "UPI" },
  { code: "DEMO-1044", name: "Abhay Dixit", phone: "9800000044", email: "demo.member44@ironcore.test", gender: "MALE", age: 41, address: "Moshi, Pune", emergencyContact: "Sunanda Dixit (Spouse) - 9811100044", daysJoinedAgo: 140, status: "INACTIVE", planKey: "quarterly", subStatus: "CANCELLED", subDaysRemaining: -40, paymentMethod: "BANK_TRANSFER" },
  { code: "DEMO-1045", name: "Mansi Godbole", phone: "9800000045", email: "demo.member45@ironcore.test", gender: "FEMALE", age: 29, address: "Hadapsar, Pune", emergencyContact: "Vinay Godbole (Brother) - 9811100045", daysJoinedAgo: 90, status: "INACTIVE", planKey: "monthly", subStatus: "CANCELLED", subDaysRemaining: -50, paymentMethod: "UPI" },

  // 46 to 50: NEW MEMBERS (joined past 1 to 5 days, no subscription yet / trial phase)
  { code: "DEMO-1046", name: "Tushar Date", phone: "9800000046", email: "demo.member46@ironcore.test", gender: "MALE", age: 33, address: "Kharadi, Pune", emergencyContact: "Pratibha Date (Mother) - 9811100046", daysJoinedAgo: 5, status: "ACTIVE" },
  { code: "DEMO-1047", name: "Shruti Pethe", phone: "9800000047", email: "demo.member47@ironcore.test", gender: "FEMALE", age: 26, address: "Mundhwa, Pune", emergencyContact: "Prakash Pethe (Father) - 9811100047", daysJoinedAgo: 4, status: "ACTIVE" },
  { code: "DEMO-1048", name: "Chetan Navathe", phone: "9800000048", email: "demo.member48@ironcore.test", gender: "MALE", age: 28, address: "Wadgaon Sheri, Pune", emergencyContact: "Ramesh Navathe (Father) - 9811100048", daysJoinedAgo: 3, status: "ACTIVE" },
  { code: "DEMO-1049", name: "Kruti Kanitkar", phone: "9800000049", email: "demo.member49@ironcore.test", gender: "FEMALE", age: 34, address: "Dhanori, Pune", emergencyContact: "Siddhesh Kanitkar (Spouse) - 9811100049", daysJoinedAgo: 2, status: "ACTIVE" },
  { code: "DEMO-1050", name: "Digvijay Salunke", phone: "9800000050", email: "demo.member50@ironcore.test", gender: "MALE", age: 39, address: "Vishrantwadi, Pune", emergencyContact: "Pooja Salunke (Spouse) - 9811100050", daysJoinedAgo: 1, status: "ACTIVE" },
];

export async function seedDemoData() {
  console.log("==========================================================");
  console.log("   CHALOBUILD GYM PLATFORM — IDEMPOTENT DEMO SEED");
  console.log("==========================================================");

  // 1. Organization
  console.log(`[1/8] Upserting Organization ("${DEMO_ORG_SLUG}")...`);
  const organization = await db.organization.upsert({
    where: { slug: DEMO_ORG_SLUG },
    update: {
      name: "IronCore Fitness",
      phone: "+91 98765 43210",
      email: "hello@ironcorefitness.demo",
      address: "Plot 42, Olympia Sports Arena, Senapati Bapat Road, Shivajinagar, Pune 411016",
      currency: "INR",
      timezone: "Asia/Kolkata",
    },
    create: {
      name: "IronCore Fitness",
      slug: DEMO_ORG_SLUG,
      phone: "+91 98765 43210",
      email: "hello@ironcorefitness.demo",
      address: "Plot 42, Olympia Sports Arena, Senapati Bapat Road, Shivajinagar, Pune 411016",
      currency: "INR",
      timezone: "Asia/Kolkata",
    },
  });

  // 2. Users (Owner & Staff)
  console.log(`[2/8] Upserting Owner & Staff accounts...`);
  const passwordHash = await bcrypt.hash(DEMO_PASSWORD, 10);

  const owner = await db.user.upsert({
    where: {
      organizationId_email: {
        organizationId: organization.id,
        email: DEMO_OWNER_EMAIL,
      },
    },
    update: {
      passwordHash,
      name: "Vikram Malhotra (Owner)",
      role: "OWNER",
      isActive: true,
    },
    create: {
      organizationId: organization.id,
      name: "Vikram Malhotra (Owner)",
      email: DEMO_OWNER_EMAIL,
      passwordHash,
      role: "OWNER",
      isActive: true,
    },
  });

  const staff = await db.user.upsert({
    where: {
      organizationId_email: {
        organizationId: organization.id,
        email: DEMO_STAFF_EMAIL,
      },
    },
    update: {
      passwordHash,
      name: "Rohan Deshmukh (Desk Manager)",
      role: "STAFF",
      isActive: true,
    },
    create: {
      organizationId: organization.id,
      name: "Rohan Deshmukh (Desk Manager)",
      email: DEMO_STAFF_EMAIL,
      passwordHash,
      role: "STAFF",
      isActive: true,
    },
  });

  // 3. Website Config
  console.log(`[3/8] Upserting WebsiteConfig for public site integration...`);
  await db.websiteConfig.upsert({
    where: { organizationId: organization.id },
    update: {
      gymName: "IronCore Fitness",
      slug: DEMO_ORG_SLUG,
      isPublished: true,
      tagline: "Train Strong. Live Strong.",
      brandColor: "#E11D48",
      phoneFormatted: "+91 98765 43210",
      phoneRaw: "+919876543210",
      whatsappRaw: "919876543210",
      email: "hello@ironcorefitness.demo",
      city: "Pune",
      state: "Maharashtra",
      showPoweredBy: true,
    },
    create: {
      organizationId: organization.id,
      slug: DEMO_ORG_SLUG,
      gymName: "IronCore Fitness",
      tagline: "Train Strong. Live Strong.",
      brandColor: "#E11D48",
      heroHeadline: "BUILD YOUR STRONGEST SELF",
      heroSubheadline: "Train smarter. Get stronger. A fitness club built for measurable physical results.",
      phoneFormatted: "+91 98765 43210",
      phoneRaw: "+919876543210",
      whatsappRaw: "919876543210",
      email: "hello@ironcorefitness.demo",
      city: "Pune",
      state: "Maharashtra",
      isPublished: true,
      showPoweredBy: true,
    },
  });

  // 4. Membership Plans
  console.log(`[4/8] Upserting 5 Membership Plans...`);
  const plansDef = [
    { key: "monthly", name: "Monthly Fitness Access", durationInDays: 30, price: 1999, desc: "Full gym floor access, locker room, and initial fitness assessment." },
    { key: "quarterly", name: "Quarterly Strength Plan", durationInDays: 90, price: 4999, desc: "3 months unlimited strength & conditioning, 1 body assessment included." },
    { key: "halfYearly", name: "Half-Yearly Transformation", durationInDays: 180, price: 8999, desc: "6 months access, 2 personal trainer consultation sessions, free workout towel." },
    { key: "annual", name: "Annual Elite Membership", durationInDays: 365, price: 14999, desc: "12 months full facility access, guest passes, personal locker, priority slot booking." },
    { key: "weekend", name: "Weekend Warrior Plan", durationInDays: 30, price: 1299, desc: "Saturday & Sunday access with specialized group strength sessions." },
  ];

  const planMap = new Map<string, { id: string; price: Prisma.Decimal; durationInDays: number }>();

  for (const def of plansDef) {
    let plan = await db.membershipPlan.findFirst({
      where: { organizationId: organization.id, name: def.name },
    });
    if (!plan) {
      plan = await db.membershipPlan.create({
        data: {
          organizationId: organization.id,
          name: def.name,
          durationInDays: def.durationInDays,
          price: new Prisma.Decimal(def.price),
          description: def.desc,
          isActive: true,
        },
      });
    } else {
      plan = await db.membershipPlan.update({
        where: { id: plan.id },
        data: {
          price: new Prisma.Decimal(def.price),
          durationInDays: def.durationInDays,
          description: def.desc,
          isActive: true,
        },
      });
    }
    planMap.set(def.key, { id: plan.id, price: plan.price, durationInDays: plan.durationInDays });
  }

  // 5. Exactly 50 Members
  console.log(`[5/8] Upserting exactly 50 Demo Members...`);
  const createdMembers = new Map<string, { id: string; name: string }>();

  for (const item of DEMO_MEMBERS_DATA) {
    const dob = new Date();
    dob.setFullYear(dob.getFullYear() - item.age);
    dob.setMonth((parseInt(item.code.slice(-2), 10) % 12));
    dob.setDate(15);

    const joiningDate = daysAgo(item.daysJoinedAgo);

    const member = await db.member.upsert({
      where: {
        organizationId_memberCode: {
          organizationId: organization.id,
          memberCode: item.code,
        },
      },
      update: {
        name: item.name,
        phone: item.phone,
        email: item.email,
        gender: item.gender,
        dateOfBirth: dob,
        joiningDate,
        address: item.address,
        emergencyContact: item.emergencyContact,
        status: item.status,
      },
      create: {
        organizationId: organization.id,
        memberCode: item.code,
        name: item.name,
        phone: item.phone,
        email: item.email,
        gender: item.gender,
        dateOfBirth: dob,
        joiningDate,
        address: item.address,
        emergencyContact: item.emergencyContact,
        status: item.status,
      },
    });

    createdMembers.set(item.code, { id: member.id, name: member.name });
  }

  // 6. Subscriptions & Payments
  console.log(`[6/8] Seeding Subscriptions and Financial Payment Records...`);
  let receiptSeq = 1000;

  for (const item of DEMO_MEMBERS_DATA) {
    if (!item.planKey) continue;
    const plan = planMap.get(item.planKey);
    const member = createdMembers.get(item.code);
    if (!plan || !member) continue;

    // Calculate dates
    let startDate: Date;
    let endDate: Date;

    if (item.subDaysRemaining !== undefined) {
      if (item.subDaysRemaining >= 0) {
        // Active or expiring soon
        endDate = daysAhead(item.subDaysRemaining);
        startDate = new Date(endDate);
        startDate.setDate(startDate.getDate() - plan.durationInDays);
      } else {
        // Expired
        endDate = daysAgo(-item.subDaysRemaining);
        startDate = new Date(endDate);
        startDate.setDate(startDate.getDate() - plan.durationInDays);
      }
    } else {
      startDate = daysAgo(item.daysJoinedAgo);
      endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + plan.durationInDays);
    }

    // Check if subscription exists for this member
    let subscription = await db.subscription.findFirst({
      where: {
        organizationId: organization.id,
        memberId: member.id,
        planId: plan.id,
      },
    });

    const subStatus: SubscriptionStatus = item.subStatus ?? (item.status === "ACTIVE" ? "ACTIVE" : "EXPIRED");

    if (!subscription) {
      subscription = await db.subscription.create({
        data: {
          organizationId: organization.id,
          memberId: member.id,
          planId: plan.id,
          startDate,
          endDate,
          amount: plan.price,
          status: subStatus,
        },
      });
    } else {
      subscription = await db.subscription.update({
        where: { id: subscription.id },
        data: {
          startDate,
          endDate,
          amount: plan.price,
          status: subStatus,
        },
      });
    }

    // Associated Payment
    const receiptNumber = `REC-DEMO-${item.code.replace("DEMO-", "")}`;
    const paidAmount = item.partialPaymentAmount
      ? new Prisma.Decimal(item.partialPaymentAmount)
      : plan.price;

    const paymentMethod = item.paymentMethod ?? "UPI";
    const paymentDate = new Date(startDate);
    paymentDate.setHours(10, 30, 0, 0);

    let payment = await db.payment.findUnique({
      where: {
        organizationId_receiptNumber: {
          organizationId: organization.id,
          receiptNumber,
        },
      },
    });

    if (!payment) {
      payment = await db.payment.create({
        data: {
          organizationId: organization.id,
          memberId: member.id,
          subscriptionId: subscription.id,
          amount: paidAmount,
          paymentMethod,
          paymentDate,
          receiptNumber,
          status: "COMPLETED",
          notes: `Demo fee payment for ${item.name} (${item.planKey} plan)`,
          createdBy: owner.id,
        },
      });
    } else {
      payment = await db.payment.update({
        where: { id: payment.id },
        data: {
          amount: paidAmount,
          paymentMethod,
          paymentDate,
          status: "COMPLETED",
          subscriptionId: subscription.id,
        },
      });
    }

    // Special demonstration case for Member 44: Add an adjustment refund record
    if (item.code === "DEMO-1044") {
      const refundReceipt = `REF-DEMO-1044`;
      const existingRefund = await db.payment.findUnique({
        where: {
          organizationId_receiptNumber: {
            organizationId: organization.id,
            receiptNumber: refundReceipt,
          },
        },
      });

      if (!existingRefund) {
        await db.payment.create({
          data: {
            organizationId: organization.id,
            memberId: member.id,
            subscriptionId: subscription.id,
            amount: new Prisma.Decimal(1500),
            paymentMethod: "BANK_TRANSFER",
            paymentDate: daysAgo(10),
            receiptNumber: refundReceipt,
            status: "PARTIALLY_REFUNDED",
            originalPaymentId: payment.id,
            notes: "Demo fee adjustment / partial refund due to early cancellation",
            createdBy: owner.id,
          },
        });
      }
    }
  }

  // 7. Attendance Records (Recent 14 days + Today)
  console.log(`[7/8] Seeding 14 days of realistic Attendance records...`);
  const activeCodes = DEMO_MEMBERS_DATA.filter((m) => m.status === "ACTIVE").map((m) => m.code);
  const now = new Date();
  const todayUtc = dayStartUtc(now);

  // Today's attendance: 14 members
  // 9 completed workouts, 5 currently on floor (checkOutTime = null)
  for (let i = 0; i < 14; i++) {
    const code = activeCodes[i % activeCodes.length];
    const member = createdMembers.get(code);
    if (!member) continue;

    const checkInTime = new Date(now);
    const isCurrent = i >= 9; // Last 5 are currently in gym!

    if (isCurrent) {
      checkInTime.setHours(now.getHours() - 1, 15 + i * 5, 0, 0);
      await db.attendance.upsert({
        where: {
          memberId_date: {
            memberId: member.id,
            date: todayUtc,
          },
        },
        update: {
          checkInTime,
          checkOutTime: null,
        },
        create: {
          organizationId: organization.id,
          memberId: member.id,
          date: todayUtc,
          checkInTime,
          checkOutTime: null,
        },
      });
    } else {
      checkInTime.setHours(6 + (i % 5), 10 + i * 4, 0, 0);
      const checkOutTime = new Date(checkInTime);
      checkOutTime.setMinutes(checkOutTime.getMinutes() + 65 + (i % 30));

      await db.attendance.upsert({
        where: {
          memberId_date: {
            memberId: member.id,
            date: todayUtc,
          },
        },
        update: {
          checkInTime,
          checkOutTime,
        },
        create: {
          organizationId: organization.id,
          memberId: member.id,
          date: todayUtc,
          checkInTime,
          checkOutTime,
        },
      });
    }
  }

  // Days 1 through 13 ago: ~12-16 check-ins per day
  for (let d = 1; d <= 13; d++) {
    const pastDate = daysAgo(d);
    const pastDateUtc = dayStartUtc(pastDate);
    const dailyCount = 10 + ((d * 3) % 8); // 10 to 17

    for (let j = 0; j < dailyCount; j++) {
      const codeIndex = (d * 5 + j) % activeCodes.length;
      const code = activeCodes[codeIndex];
      const member = createdMembers.get(code);
      if (!member) continue;

      const checkInTime = new Date(pastDate);
      checkInTime.setHours(6 + (j % 12), (j * 7) % 60, 0, 0);
      const checkOutTime = new Date(checkInTime);
      checkOutTime.setMinutes(checkOutTime.getMinutes() + 50 + (j % 40));

      await db.attendance.upsert({
        where: {
          memberId_date: {
            memberId: member.id,
            date: pastDateUtc,
          },
        },
        update: {
          checkInTime,
          checkOutTime,
        },
        create: {
          organizationId: organization.id,
          memberId: member.id,
          date: pastDateUtc,
          checkInTime,
          checkOutTime,
        },
      });
    }
  }

  // 8. Operational Expenses & Sample Leads
  console.log(`[8/8] Seeding Operational Expenses & Lead Enquiries...`);
  const expenseDefs: { title: string; amount: number; category: ExpenseCategory; method: PaymentMethod; daysAgo: number }[] = [
    { title: "Monthly Facility Lease - Olympia Arena", amount: 85000, category: "RENT", method: "BANK_TRANSFER", daysAgo: 5 },
    { title: "MSEDCL Commercial Power Utility", amount: 18450, category: "ELECTRICITY", method: "BANK_TRANSFER", daysAgo: 8 },
    { title: "Olympic Barbells & Cable Pulley Servicing", amount: 4800, category: "EQUIPMENT_REPAIR", method: "UPI", daysAgo: 14 },
    { title: "High-Speed Commercial Fiber Internet", amount: 2499, category: "INTERNET", method: "UPI", daysAgo: 12 },
    { title: "Sanitization & Restroom Cleaning Supplies", amount: 3600, category: "CLEANING", method: "CASH", daysAgo: 19 },
    { title: "Trainer & Floor Staff Monthly Compensation", amount: 62000, category: "STAFF", method: "BANK_TRANSFER", daysAgo: 7 },
    { title: "Local Instagram & Meta Targeted Promotion", amount: 7500, category: "MARKETING", method: "ONLINE", daysAgo: 16 },
    { title: "Central HVAC & Ventilation Maintenance", amount: 6200, category: "MAINTENANCE", method: "UPI", daysAgo: 22 },
    { title: "RO Drinking Water Plant Servicing & Filters", amount: 1850, category: "WATER", method: "CASH", daysAgo: 25 },
  ];

  for (let k = 0; k < expenseDefs.length; k++) {
    const exp = expenseDefs[k];
    const refNum = `EXP-DEMO-${202600 + k}`;
    const expDate = daysAgo(exp.daysAgo);

    const existingExpense = await db.expense.findFirst({
      where: {
        organizationId: organization.id,
        referenceNumber: refNum,
      },
    });

    if (!existingExpense) {
      await db.expense.create({
        data: {
          organizationId: organization.id,
          title: exp.title,
          amount: new Prisma.Decimal(exp.amount),
          category: exp.category,
          paymentMethod: exp.method,
          expenseDate: expDate,
          referenceNumber: refNum,
          status: "PAID",
          notes: "Demo operational expense record",
          createdBy: owner.id,
        },
      });
    }
  }

  // 5 Realistic Website Trial Leads
  const leadsDef = [
    { name: "Akash Shrivastav", phone: "9820011001", email: "akash.s@example.test", goal: "Muscle Building & Strength", slot: "Evening (5:00 PM – 10:00 PM)", status: "NEW" },
    { name: "Pooja Hegde", phone: "9820011002", email: "pooja.h@example.test", goal: "Fat Loss & Toning", slot: "Morning (6:00 AM – 10:00 AM)", status: "CONTACTED" },
    { name: "Nitin Gadve", phone: "9820011003", email: "nitin.g@example.test", goal: "Athletic Conditioning", slot: "Morning (6:00 AM – 10:00 AM)", status: "CONVERTED" },
    { name: "Simran Kaur", phone: "9820011004", email: "simran.k@example.test", goal: "Personal Training Guidance", slot: "Weekend Flexible", status: "NEW" },
    { name: "Rishabh Jain", phone: "9820011005", email: "rishabh.j@example.test", goal: "Muscle Building & Strength", slot: "Afternoon (11:00 AM – 4:00 PM)", status: "CONTACTED" },
  ];

  for (const lead of leadsDef) {
    const existingLead = await db.leadEnquiry.findFirst({
      where: { organizationId: organization.id, phone: lead.phone },
    });
    if (!existingLead) {
      await db.leadEnquiry.create({
        data: {
          organizationId: organization.id,
          fullName: lead.name,
          phone: lead.phone,
          email: lead.email,
          goal: lead.goal,
          slot: lead.slot,
          status: lead.status,
        },
      });
    }
  }

  console.log("==========================================================");
  console.log("DEMO SEED COMPLETED SUCCESSFULLY!");
  console.log(`  Organization: "${organization.name}" (slug: "${organization.slug}")`);
  console.log(`  Owner Account: ${DEMO_OWNER_EMAIL} / ${DEMO_PASSWORD}`);
  console.log(`  Staff Account: ${DEMO_STAFF_EMAIL} / ${DEMO_PASSWORD}`);
  console.log(`  Seeded Members: ${DEMO_MEMBERS_DATA.length} (exactly 50 members)`);
  console.log(`  Membership Plans: ${plansDef.length} plans`);
  console.log("==========================================================");
}

if (require.main === module) {
  seedDemoData()
    .catch((error) => {
      console.error("FATAL ERROR during seedDemoData:", error);
      process.exitCode = 1;
    })
    .finally(async () => {
      await db.$disconnect();
    });
}
