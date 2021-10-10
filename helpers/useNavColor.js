import { useRouter } from "next/router";

export default function useNavColor(data) {
  const { pathname } = useRouter();
  const navColor = data[pathname];

  return navColor;
}
