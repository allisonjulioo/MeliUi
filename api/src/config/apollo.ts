export interface Resolver<Args, Response> {
  (args: Args): Response;
}
