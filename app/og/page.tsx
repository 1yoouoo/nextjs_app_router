import { Metadata } from "next";
import Image from "next/image";
import { decodeParams } from "../utils/encrypt";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const encoded = searchParams.encoded as string;
  const { name, totalCount } = encoded
    ? decodeParams(encoded)
    : { name: "", totalCount: "" };

  return {
    title: "글감 조회 | 경험기록",
    description: "나도 자기소개서 쓰러가기",
    openGraph: {
      title:
        name && totalCount
          ? `${name}님이 글감을 ${totalCount}개 모았어요!`
          : "글감 조회 | 경험기록",
      type: "website",
      description: "나도 자기소개서 쓰러가기",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "나도 자기소개서 쓰러가기",
        },
      ],
    },
  };
}

const Page = () => {
  return (
    <Image
      src="/opengraph-image.png"
      alt="나도 자기소개서 쓰러가기"
      width={1200}
      height={630}
    />
  );
};

export default Page;
