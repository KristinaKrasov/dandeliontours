import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DandelionMark } from "@/components/dandelion-brand";

const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Введите имя"),

  phone: z.string().trim().min(7, "Введите корректный номер телефона"),

  destination: z.string().trim().max(100, "Максимум 100 символов").optional(),

  message: z.string().trim().max(500, "Максимум 500 символов").optional(),
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

interface LeadFormProps {
  tourName?: string;
}

export function LeadForm({ tourName }: LeadFormProps) {
  const [isSent, setIsSent] = useState(false);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      destination: tourName ?? "",
      message: "",
    },
  });

  function onSubmit(_data: LeadFormValues) {
    setIsSent(true);
    form.reset();
  }

  if (isSent) {
    return (
      <div className="flex min-h-80 items-center justify-center border border-camel/40 p-8 text-center">
        <div>
          <DandelionMark className="mx-auto h-12 w-12 text-camel" />

          <p className="font-display mt-5 text-3xl text-cream">Спасибо!</p>

          <p className="mt-3 text-cream/70">Форма успешно отправлена.</p>

          <p className="mt-2 text-xs text-cream/45">
            Это демонстрационная версия сайта. Введённые данные не сохраняются.
          </p>

          <Button
            type="button"
            variant="outline"
            className="mt-6 border-cream/30 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
            onClick={() => setIsSent(false)}
          >
            Заполнить ещё раз
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2" noValidate>
        {tourName && (
          <p className="sm:col-span-2 text-sm text-cream/70">
            Выбранный тур: <span className="font-semibold text-cream">{tourName}</span>
          </p>
        )}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Ваше имя</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ваше имя"
                  autoComplete="name"
                  className="h-14 rounded-md border-cream/20 bg-cream/10 px-5 text-cream placeholder:text-cream/45"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-300" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Телефон</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  autoComplete="tel"
                  className="h-14 rounded-md border-cream/20 bg-cream/10 px-5 text-cream placeholder:text-cream/45"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-300" />
            </FormItem>
          )}
        />

        {!tourName && (
          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel className="sr-only">Куда хотите поехать</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Куда хотите поехать?"
                    className="h-14 rounded-md border-cream/20 bg-cream/10 px-5 text-cream placeholder:text-cream/45"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel className="sr-only">Пожелания к туру</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Кто едет, примерные даты и пожелания"
                  className="min-h-32 rounded-md border-cream/20 bg-cream/10 p-5 text-cream placeholder:text-cream/45"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-300" />
            </FormItem>
          )}
        />

        <p className="text-xs leading-relaxed text-cream/45 sm:col-span-2">
          Демонстрационная форма. Введённые данные не сохраняются и никуда не отправляются.
        </p>

        <Button
          type="submit"
          size="lg"
          className="h-14 rounded-md bg-gold px-8 font-bold uppercase tracking-[0.12em] text-cream hover:bg-camel sm:col-span-2 sm:justify-self-start"
        >
          Обсудить путешествие
          <ArrowRight />
        </Button>
      </form>
    </Form>
  );
}
