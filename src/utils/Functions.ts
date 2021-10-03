import { SellOrder } from 'src/models/sell-order.model';

export class Functions {
  dealToSellOrder(deal: any) {
    const order: SellOrder = {
      code: deal.id,
      salesman_name: deal.owner_name,
      client_name: deal.person_name,
      client_email: deal.person_id.email[0].value,
      unit_value: deal.value,
      description: deal.description,
      products_qtt: deal.products_count,
    };
    return order;
  }

  toXmlSellOrder(sellOrderObj: SellOrder) {
    return `
      <?xml version="1.0" encoding="UTF-8"?>
      <pedido>
        <vendedor>${sellOrderObj.salesman_name}</vendedor>
        <cliente>
          <nome>${sellOrderObj.client_name}</nome>
          <email>${sellOrderObj.client_email}</email>
        </cliente>
        <transporte>
          <volume>
            <servico>SEDEX - CONTRATO</servico>
          </volume>
        </transporte>
        <itens>
          <item>
          <codigo>${sellOrderObj.code}</codigo>
          <descricao>${sellOrderObj.description}</descricao>
          <qtde>${sellOrderObj.products_qtt}</qtde>
          <vlr_unit>${sellOrderObj.unit_value}</vlr_unit>
          </item>
        </itens>
      </pedido>
      `;
  }

  dealsToDailyProfit(deals: any) {
    let ammount = 0;

    for (const { value, products_count } of deals) {
      ammount += value * products_count;
    }
    const formatedDeals = deals.map((d) =>
      this.dealToSellOrder({
        ...d,
        description: `Produto ${d.id} de ${d.org_id.name}`,
      }),
    );
    return {
      deals: formatedDeals,
      ammount,
      record_date: this.getCurrentDate(),
      updated_at: this.getCurrentDate(),
    };
  }

  getCurrentDate(): Date {
    return new Date(
      Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(new Date()),
    );
  }
}
