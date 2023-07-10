import { prisma } from "~/db.server";

export type Post = {
  slug: string;
  title: string;
};

export async function getPosts(): Promise<Array<Post>> {
	return prisma.post.findMany();
}