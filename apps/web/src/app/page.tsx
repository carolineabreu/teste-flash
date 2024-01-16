//import { Card } from "@repo/ui/card"; // faz com que o projeto next importe componentes de "ui";
import { ProgressCircle } from "@/components/progress-circle";
import { colors } from "@repo/tokens/colors";
import { MoveRight } from "lucide-react";
import { Button, ButtonIcon, ButtonText } from "@repo/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    // <div>
    //   <Card title="Hello World" href="/">
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, sapiente
    //     neque nesciunt pariatur cum voluptate illum dolores recusandae
    //     blanditiis molestias saepe voluptatibus vero dolor aliquid vel. Deserunt
    //     praesentium aliquam eaque.
    //   </Card>
    // </div>

    <div>
      <div className="bg-gradient-to-t from-aquamarine-500 to-aquamarine-300 flex flex-col px-6 py-5 gap-8 md:flex-row-reverse md:justify-between md:items-center">
        <img
          src="https://github.com/brennoEudes.png "
          alt=""
          className="rounded-full h-16 w-16 self-end"
        />{" "}
        {/* url p/ pegar foto perfil GitHub */}
        <span className="text-2xl font-bold leading-heading text-softpeach-50">
          Dashboard
        </span>
      </div>
      <main className="p-6 flex flex-col gap-4">
        <span className="text-lg font-bold leading-heading">Colections</span>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 12 }).map((_, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-5 px-5 py-6 rounded-lg border border-black-100 shadow-lg transition-transform duration-300 hover:scale-[1.025]"
              >
                <span className="font-bold text-sm text-aquamarine-700 leading-heading">
                  JAVASCRIPT
                </span>
                <div className="space-y-2">
                  <h2 className="font-bold leading-heading">
                    JavaScript Fundamentals
                  </h2>
                  <p className="text-black-500 text-sm leading-base">
                    Train your knowledge of JavaScript fundamentals such as
                    Arrays, Variables and Repeating Structures.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <Link href="/flash">
                    <Button>
                      <ButtonText>Access Collection</ButtonText>
                      <ButtonIcon icon={MoveRight} />
                    </Button>
                  </Link>

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6">
                      <ProgressCircle progress={50} />
                    </div>
                    <span className="text-aquamarine-400 font-bold text-sm leading-base">
                      8/12
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
