import { IconArrowUpRight, IconEye, IconSend } from "@tabler/icons-react";

export default function NewsBlogCart() {
    return (
        <div>
            <article className="group">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                />

                <div className="">
                    <a href="#">
                        <h3 className="text-lg font-medium text-foreground">Finding the Journey to Mordor</h3>
                    </a>

                    <p className="mt-2 line-clamp-1 text-sm/relaxed text-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt
                        praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora
                        nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?
                    </p>
                </div>
                <div className="flex items-center justify-between my-6">
                    <div className="flex gap-4">
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                            <IconEye className="h-6 w-6" />
                            2.2k
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                            <IconSend className="h-5 w-5" />
                            60
                        </span>
                    </div>
                    <button className="flex items-center gap-1 rounded-md border border-neutral-700 px-3 py-2 text-xs font-medium text-gray-300 transition hover:bg-neutral-800">
                        Read More
                        <IconArrowUpRight className="h-4 w-4 text-yellow-400" />
                    </button>
                </div>
            </article>
        </div>
    );
}
